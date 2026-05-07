# Coffee Nutz · Website Concepts

This is a polished, password-protected client preview site designed to present three distinct website design concepts to the owner of Coffee Nutz. It's built with Next.js 14 and Tailwind CSS, providing a high-end, editorial presentation format that feels like a customized deliverable.

## How to add screenshots

To add your concept designs to the site, simply drop your PNG or JPG files into the respective folders inside `public/images/`:
- `public/images/concept-a/` (Velvet Hour)
- `public/images/concept-b/` (Field Notes)
- `public/images/concept-c/` (Sunday Bright)

Make sure your files exactly match these expected filenames for each concept:
- `home-desktop.png`
- `home-mobile.png`
- `menu.png`
- `drink-detail.png`
- `beyond-coffee.png`
- `faq.png`
- `jobs.png`

*(If an image is missing, the site will elegantly display a colored placeholder with the filename).*

## How to edit copy

- **Concept Details, Quotes, & Placeholders:** Edit `lib/concepts.ts`. This is where you can change the name, date, email, as well as the rationale and pull quotes for each concept.
- **Section Headers & Static Text:** Edit the components directly or adjust `app/page.tsx` if you need to modify structural or intro text.

## How to change the password

To update the password:
1. **Locally:** Edit the `PREVIEW_PASSWORD` variable in your `.env.local` file.
2. **Production:** Update the `PREVIEW_PASSWORD` environment variable in your Vercel project dashboard.

## How to deploy

You can deploy the site easily via Vercel:
1. Run `vercel deploy --prod` from the project root using the Vercel CLI.
2. **Or**, push this repository to GitHub and connect it to your Vercel dashboard for automatic deployments.

Make sure to configure the `PREVIEW_PASSWORD` environment variable in Vercel before sharing the link.

## How to share

Once deployed, send the live Vercel URL and the password to your client. 
When they log in, an authentication cookie is set that will keep them logged in for **7 days**.
