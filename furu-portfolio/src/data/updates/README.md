# Project updates

Orbis Spatial entries live in `orbis-spatial.json`; `orbis-spatial.ts` exports the typed list. The initial 30 entries were imported from the supplied editorial development log, with an English translation. Dates and source references are preserved; editorial entry IDs are not Git commit hashes.

Add an entry using this template:

```json
{
  "id": "unique-update-id",
  "date": "2026-11-02",
  "type": "feat",
  "scope": "gnss",
  "title": { "es": "Título del cambio", "en": "Change title" },
  "details": {
    "es": ["Detalle del cambio."],
    "en": ["Change detail."]
  },
  "sources": ["Referencia a la bitácora original"]
}
```

Supported types: `feat`, `fix`, `test`, `research`, `plan`, `docs`, `chore`. Optional fields include a localized `description`, localized `note`, and a real `commit` hash when available. Type, scope, details, and sources are also optional. Entries appear newest first; entries on the same date retain array order. Search matches both languages, dates, types, scopes, details, notes, and sources, ignoring accents and case. The type filter combines with search.

The Updates button opens `/projects/<project-id>/updates` in a new tab. To enable another project, create a data export of type `ProjectUpdate[]` and assign it to the project's `updates` field in `src/data/projects.ts`. An empty array enables an empty history page. Omitting `updates` hides the button and disables the page. Only Orbis Spatial is currently enabled; this history does not read Git automatically.
