# Architecture

Use adapter interfaces for real-time transport, speech recognition, language model and speech synthesis. The orchestration layer owns turn state, tool authorization, escalation and audit events; provider adapters must not own business decisions.
