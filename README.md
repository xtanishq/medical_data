# Careboard ICU

Responsive ICU patient monitoring prototype built with NestJS and a dependency-free browser frontend.

## Included

- Manual Patient ID lookup
- QR scanning with the browser `BarcodeDetector` API
- Responsive patient dashboard for mobile, tablet, and desktop
- 24 hourly records with 20 clinical observations per hour
- Normal, review, and critical states
- Trend chart, hour selector, and clinical category filters
- Validated patient lookup API and security response headers

The current records are in-memory demo data based on the supplied workbook structure. They are not a production clinical data store.

## Run locally

```bash
npm install
npm run start:dev
```

Open [http://localhost:3000](http://localhost:3000).

Demo records:

- `GU70050` — stable
- `GU70049` — critical

## Free demo deployment on Render

The repository includes a `render.yaml` Blueprint for one free Node.js web service in Singapore.

1. Push the repository to GitHub.
2. In Render, choose **New → Blueprint**.
3. Connect the GitHub repository and select its default branch.
4. Render detects `render.yaml`; approve the `careboard-icu` free service.
5. Wait for the build and confirm the `/health` check passes.

The free service can sleep after inactivity and may take about a minute to wake. Use this deployment only for demonstration data, not real patient records.

## API

```text
POST /api/patients/resolve
GET  /api/patients/:patientId
GET  /health
```

Example lookup payload:

```json
{
  "value": "GU70050"
}
```

The resolve endpoint also accepts QR payloads containing a supported patient URL or a JSON object with a `patientId` property.

## Verification

```bash
npm run build
npm test -- --runInBand
npx eslint "{src,apps,libs,test}/**/*.ts"
```

## Before production use

Connect the ICU module to PostgreSQL, add authenticated sessions and role-based access, replace direct Patient IDs in QR codes with signed short-lived tokens, implement immutable audit events, and have clinical thresholds reviewed and approved by the hospital. Do not use the demo data or generated status logic for clinical decisions.
