import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

type HealthResponse = {
  status: string;
  service: string;
  uptimeSeconds: unknown;
  checkedAt: unknown;
};

type UserResponse = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  password?: string;
  passwordHash?: string;
};

type LoginResponse = {
  message: string;
  user: UserResponse;
};

type PatientResponse = {
  patientId: string;
  overallStatus: string;
  hourlyRecords: Array<{
    observations: unknown[];
  }>;
};

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Backend API is running');
  });

  it('/health (GET)', () => {
    return request(app.getHttpServer())
      .get('/health')
      .expect(200)
      .expect((response) => {
        const body = response.body as HealthResponse;

        expect(body).toMatchObject({
          status: 'ok',
          service: 'backend-api',
        });
        expect(typeof body.uptimeSeconds).toBe('number');
        expect(typeof body.checkedAt).toBe('string');
      });
  });

  it('/users (POST) creates a user', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({
        name: 'Tanishq',
        email: 'tanishq@example.com',
        password: 'password123',
      })
      .expect(201)
      .expect((response) => {
        const body = response.body as UserResponse;

        expect(body).toMatchObject({
          name: 'Tanishq',
          email: 'tanishq@example.com',
        });
        expect(typeof body.id).toBe('string');
        expect(typeof body.createdAt).toBe('string');
        expect(body.password).toBeUndefined();
        expect(body.passwordHash).toBeUndefined();
      });
  });

  it('/users (POST) validates request body', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({
        name: '',
        email: 'wrong-email',
        password: 'short',
        extra: 'not allowed',
      })
      .expect(400);
  });

  it('/auth/signup (POST) signs up a user', () => {
    return request(app.getHttpServer())
      .post('/auth/signup')
      .send({
        name: 'Aman',
        email: 'aman@example.com',
        password: 'password123',
      })
      .expect(201)
      .expect((response) => {
        const body = response.body as UserResponse;

        expect(body).toMatchObject({
          name: 'Aman',
          email: 'aman@example.com',
        });
        expect(body.password).toBeUndefined();
        expect(body.passwordHash).toBeUndefined();
      });
  });

  it('/auth/login (POST) logs in a signed up user', async () => {
    await request(app.getHttpServer()).post('/auth/signup').send({
      name: 'Aman',
      email: 'aman@example.com',
      password: 'password123',
    });

    return request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'aman@example.com',
        password: 'password123',
      })
      .expect(201)
      .expect((response) => {
        const body = response.body as LoginResponse;

        expect(body).toMatchObject({
          message: 'Login successful',
          user: {
            email: 'aman@example.com',
          },
        });
      });
  });

  it('/auth/login (POST) rejects wrong password', async () => {
    await request(app.getHttpServer()).post('/auth/signup').send({
      name: 'Aman',
      email: 'aman@example.com',
      password: 'password123',
    });

    return request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'aman@example.com',
        password: 'wrong-password',
      })
      .expect(401);
  });

  it('/api/patients/resolve (POST) returns a complete ICU record', () => {
    return request(app.getHttpServer())
      .post('/api/patients/resolve')
      .send({ value: 'GU70050' })
      .expect(200)
      .expect((response) => {
        const body = response.body as PatientResponse;

        expect(body).toMatchObject({
          patientId: 'GU70050',
          overallStatus: 'Normal',
        });
        expect(body.hourlyRecords).toHaveLength(24);
        expect(body.hourlyRecords[0].observations).toHaveLength(20);
      });
  });

  it('/api/patients/resolve (POST) accepts a QR URL', () => {
    return request(app.getHttpServer())
      .post('/api/patients/resolve')
      .send({ value: 'https://careboard.test/patient/GU70049' })
      .expect(200)
      .expect((response) => {
        const body = response.body as PatientResponse;

        expect(body).toMatchObject({
          patientId: 'GU70049',
          overallStatus: 'Critical',
        });
      });
  });

  afterEach(async () => {
    await app.close();
  });
});
