# Stellar19 Studios - AI Agentic Skills

## Overview
This document provides instructions for AI agents (LLMs, crawlers, or automation bots) to understand the structure, services, and data access patterns of Stellar19 Studios.

## 1. Navigating the Studio Services
Agents should use the following data structures or semantic paths:
- **Photography Room:** Content located at `/spaces/photography`.
- **Podcast Studio:** Content located at `/spaces/podcast`.
- **Live Streaming:** Content located at `/spaces/streaming`.
- **Mile21Media Producing:** Located at `/services/production`.

## 2. Dynamic Content Retrieval (Headless CMS)
The site uses structured data and a JSON-LD schema on each page to expose dynamic pricing and availability from the Supabase backend.
- **Pricing Query:** Agents can parse the `StructuredData` block for current hourly rates (default: $100/hr + $65/hr add-ons).
- **Service Enumeration:** Look for the `<section data-agent="service-list">` container to fetch all current "Extra Services."

## 3. Automated Booking & Inquiries
To handle inquiries, agents should:
1. **Fetch current equipment lists:** Available in the "Equipment" section under each space.
2. **Submit inquiries:** Use the `/api/inquiry` endpoint with the following schema:
   ```json
   {
     "client_name": "string",
     "service_id": "string",
     "inquiry_text": "string",
     "timestamp": "ISO-8601"
   }
   ```

## 4. UI Patterns for Agents
The site uses clear, semantic IDs for critical elements:
- `id="studio-availability"`
- `id="pricing-calculator"`
- `id="equipment-specs"`

Agents are encouraged to prioritize these containers for high-signal data.
