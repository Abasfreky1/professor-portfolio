/*
  # File Storage Setup

  1. New Tables
    - `portfolio_files`
      - `id` (uuid, primary key) - Unique identifier for each file
      - `file_name` (text) - Original name of the file
      - `file_path` (text) - Storage path of the file
      - `file_type` (text) - MIME type of the file
      - `file_size` (bigint) - Size of the file in bytes
      - `description` (text, nullable) - Optional description
      - `category` (text) - Category (e.g., 'publication', 'research', 'document')
      - `uploaded_at` (timestamptz) - When the file was uploaded
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on `portfolio_files` table
    - Add policy for public read access (portfolio is public)
    - Add policy for authenticated admin to manage files
*/

-- Create portfolio_files table
CREATE TABLE IF NOT EXISTS portfolio_files (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  file_name text NOT NULL,
  file_path text UNIQUE NOT NULL,
  file_type text NOT NULL,
  file_size bigint NOT NULL,
  description text,
  category text NOT NULL DEFAULT 'document',
  uploaded_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE portfolio_files ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view files (public portfolio)
CREATE POLICY "Anyone can view portfolio files"
  ON portfolio_files
  FOR SELECT
  USING (true);

-- Policy: Only authenticated users can insert files
CREATE POLICY "Authenticated users can upload files"
  ON portfolio_files
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Only authenticated users can update files
CREATE POLICY "Authenticated users can update files"
  ON portfolio_files
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Only authenticated users can delete files
CREATE POLICY "Authenticated users can delete files"
  ON portfolio_files
  FOR DELETE
  TO authenticated
  USING (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_portfolio_files_category ON portfolio_files(category);
CREATE INDEX IF NOT EXISTS idx_portfolio_files_uploaded_at ON portfolio_files(uploaded_at DESC);