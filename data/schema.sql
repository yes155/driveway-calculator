CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  payload TEXT NOT NULL,
  payload_hash TEXT NOT NULL,
  page_url TEXT NOT NULL,
  consent_text TEXT NOT NULL,
  consent_at TEXT NOT NULL,
  status TEXT NOT NULL CHECK(status IN ('pending','forwarded','failed')),
  attempts INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS leads_status_idx ON leads(status,created_at);
CREATE TABLE IF NOT EXISTS rate_limits (
  ip_hash TEXT NOT NULL,
  window INTEGER NOT NULL,
  count INTEGER NOT NULL,
  PRIMARY KEY(ip_hash,window)
);
