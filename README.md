
# IP Geo Lookup Backend

Dieses Projekt stellt ein Backend zur Verfügung, das die Geoinformationen zu einer gegebenen IP-Adresse abruft.

## Voraussetzungen

- Node.js (>= 14.x)
- npm (>= 6.x)

## Installation

1. Repository klonen:

   ```bash
   git clone https://github.com/NakanoHanzo/ip-geo-backend.git
   cd ip-geo-backend
   ```

2. Abhängigkeiten installieren:

   ```bash
   npm install
   ```
   
## Entwicklung

1. Entwicklungsserver starten:

   ```bash
   npm run dev
   ```

2. Der Server wird auf `http://localhost:4000` laufen.

## Endpunkte

### IP Lookup

- **URL:** `/api/lookup`
- **Methode:** `POST`
- **Beschreibung:** Holt Geoinformationen für eine gegebene IP-Adresse.
- **Body-Parameter:**
  - `ip` (string): Die IP-Adresse, für die Geoinformationen abgerufen werden sollen.

#### Beispielanfrage

```bash
curl -X POST http://localhost:4000/api/lookup -H "Content-Type: application/json" -d '{"ip": "8.8.8.8"}'
```

#### Beispielantwort

```json
{
  "status": "success",
  "country": "United States",
  "countryCode": "US",
  "region": "VA",
  "regionName": "Virginia",
  "city": "Ashburn",
  "zip": "20149",
  "lat": 39.03,
  "lon": -77.5,
  "timezone": "America/New_York",
  "isp": "Google LLC",
  "org": "Google Public DNS",
  "as": "AS15169 Google LLC",
  "query": "8.8.8.8"
}
```


