# Supabase Integration Setup Instructions

## Quick Start

You need to run the SQL migration script in your Supabase project to create the database tables.

### Step 1: Open Supabase SQL Editor

1. Go to your Supabase project: https://pjuzlvscyeqfzhbkfdns.supabase.co
2. Click on **SQL Editor** in the left sidebar
3. Click **New Query**

### Step 2: Run Migration Script

1. Open the file `supabase-migration.sql` in your project
2. Copy the entire contents
3. Paste into the Supabase SQL Editor
4. Click **Run** or press `Ctrl+Enter` (Windows/Linux) or `Cmd+Enter` (Mac)

The script will create:
- `beers` table with all beer data fields
- `translations` table for multi-language support
- Row Level Security (RLS) policies for public read access
- Sample beer data (8 beer styles)
- Sample translations for the Altbier beer

### Step 3: Add Your Full Beer Data

After running the migration, you have two options:

**Option A: Manual Entry via Supabase Dashboard**
1. Go to **Table Editor** → **beers**
2. Click **Insert** → **Insert row**
3. Fill in the beer data

**Option B: Bulk Import via SQL (Recommended)**
1. I can help generate INSERT statements for all your beers
2. Run them in the SQL Editor

### Step 4: Test Your Website

1. The local server is already running at http://localhost:8000
2. Refresh your browser
3. You should see the loading message "🍺 Carregando cervejas..."
4. Then beers should load from Supabase!

## What's Been Implemented

✅ Supabase client library (loaded via CDN)
✅ Service layer (`js/services/supabase.js`)
✅ Updated `app.js` to fetch from Supabase
✅ Loading state handling
✅ Error handling with fallback to static data
✅ `.env` file with your credentials (DO NOT commit to Git!)
✅ `.gitignore` to protect credentials

## Files Created/Modified

### New Files:
- `js/config.js` - Supabase configuration
- `js/services/supabase.js` - Database service layer
- `supabase-migration.sql` - Database schema
- `.env` - Environment variables (SECRET!)
- `.env.example` - Template for other developers
- `.gitignore` - Git ignore rules

### Modified Files:
- `js/app.js` - Now fetches from Supabase
- `css/styles.css` - Added loading message styles

## Next Steps

1. **Run the migration script** (see instructions above)
2. **Populate your beer data** (I can help with this!)
3. **Add translations** to the translations table
4. **Test the website** at http://localhost:8000

## Troubleshooting

**Problem:** Beers don't load from Supabase
- Check browser console for errors (F12 → Console tab)
- Verify you ran the migration script
- Verify tables have data: Supabase Dashboard → Table Editor

**Problem:** Loading message stays forever
- Check if migration script ran successfully
- Check if RLS policies are enabled (they should allow public SELECT)

**Problem:** CORS errors
- This shouldn't happen with Supabase (it has CORS enabled)
- If it does, check your project URL is correct in `js/config.js`

## Need Help?

Let me know if you need help:
- Generating INSERT statements for all your beers
- Adding translations to the database
- Debugging any issues
