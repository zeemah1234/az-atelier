# AZ Atelier

A one-page, responsive website for AZ Atelier, a fictional fashion brand selling native wear, gowns and corporate wear. Built as the TechUp Academy Brand Website Project.

**Live website:** # AZ Atelier

A one-page, responsive website for AZ Atelier, a fictional fashion brand selling native wear, gowns and corporate wear. Built as the TechUp Academy Brand Website Project.

**Live website:** https://az-atelier-rosy.vercel.app/
**GitHub repository:** https://github.com/zeemah1234/az-atelier

> AZ Atelier is a fictional business. The contact details are made up, and the enquiry and appointment forms are demonstrations only. Nothing is sent or saved.

## Brand description

- **Name:** AZ Atelier
- **Offer:** Native wear, gowns and corporate wear, plus fittings and styling appointments.
- **Audience:** People who want stylish outfits for everyday wear and special occasions.
- **Main action:** Browse the collection, then make an enquiry or book an appointment.

## Tools used

- React (created with Vite) and JavaScript
- Plain CSS with CSS variables for the light and dark themes
- Google Fonts: Playfair Display and Inter
- Git and GitHub, deployed on Vercel

## Features

- Seven sections: navigation, home, about, collection, FAQ, contact and footer
- Responsive layout for phone, tablet and laptop
- Mobile menu that opens and closes (uses `aria-expanded`)
- Dark mode toggle that switches the whole page (uses `aria-pressed`)
- Nine products rendered from an array with `.map()`
- First three products shown, with a "View all" / "Show less" button
- Search that ignores letter case, checks every product (including hidden ones) and shows "No products found" when nothing matches
- FAQ accordion with five questions, opened with the mouse or keyboard
- Enquiry form and appointment form with controlled inputs and validation (empty and spaces-only values, email format, past dates)
- Visible labels, alt text on images and visible keyboard focus

## Set up and run

1. Clone the repository:
   ```
   git clone https://github.com/zeemah1234/az-atelier.git
   cd az-atelier
   ```
2. Install the packages:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open the link shown in the terminal, usually http://localhost:5173.

To make a production build, run `npm run build`.

## Project structure

```
public/images/        product, hero and about images
src/data.js           products and FAQ arrays
src/validation.js     email and date helpers
src/components/       Navbar, ThemeToggle, Hero, About, ProductList,
                      ProductCard, FAQ, Contact, EnquiryForm,
                      AppointmentForm, Footer
src/index.css         styles and light/dark colour variables
```

## Image credits

I got each photos from Unsplash app.
- Ankara-peplum: Studio YW, Unsplash, https://unsplash.com/photos/woman-in-ornate-blue-dress-and-headwrap-p5ewDl5mVWc
- aso-oke: McFollis, Unsplash, https://unsplash.com/photos/woman-in-green-dress-and-headwrap-r1vPrS9JDZ8
- Lace-mermaid: Jonathan Borba, Unsplash, https://unsplash.com/photos/woman-in-white-floral-wedding-dress--shn8ecaH2w
- off-shoulder: Promfy, Unsplash, https://unsplash.com/photos/a-white-wedding-dress-with-pink-flowers-on-a-mannequin-tVw_GvPEGyU
- office-blazer: Lonela Mat, Unsplash, https://unsplash.com/photos/a-person-wearing-a-jacket-and-jeans-qw3PKqZnzdE
- pencil-skirt: Doan Tien Hai, Unsplash, https://unsplash.com/photos/woman-in-white-dress-shirt-and-brown-slit-skit-standing-outside-during-daytime-qUgqizpEmQM
- satin-evening: FOTOGRAFIA EDITORIAL, Unsplash, https://unsplash.com/photos/woman-in-a-red-dress-with-a-high-slit-_kx6ShhfCvs
- senator-kaftan: Patrick Amofah, Unsplash, https://unsplash.com/photos/a-man-in-a-green-outfit-standing-in-a-hallway-MUsBHMkjPXU
- wrap-dress: James Lewis, Unsplash,, https://unsplash.com/photos/woman-in-seashore-ohiyigDmlYc

- Hero image:Iwari Inc., Unsplash, [link](https://unsplash.com/photos/a-group-of-colorful-objects-JnOFLg09yRE)
- About image: Vitaly Gariev, Unsplash, [link](https://unsplash.com/photos/fashion-designers-collaborating-and-working-in-a-studio-O6c8l2ROAYI)

(Delete this section if every image is your own.)

## A challenge I solved

WRITE ONE SHORT PARAGRAPH IN YOUR OWN WORDS. Say what the problem was, what you tried, and what fixed it.
**GitHub repository:** https://github.com/zeemah1234/az-atelier

> AZ Atelier is a fictional business. The contact details are made up, and the enquiry and appointment forms are demonstrations only. Nothing is sent or saved.

## Brand description

- **Name:** AZ Atelier
- **Offer:** Native wear, gowns and corporate wear, plus fittings and styling appointments.
- **Audience:** People who want stylish outfits for everyday wear and special occasions.
- **Main action:** Browse the collection, then make an enquiry or book an appointment.

## Tools used

- React (created with Vite) and JavaScript
- Plain CSS with CSS variables for the light and dark themes
- Google Fonts: Playfair Display and Inter
- Git and GitHub, deployed on Vercel

## Features

- Seven sections: navigation, home, about, collection, FAQ, contact and footer
- Responsive layout for phone, tablet and laptop
- Mobile menu that opens and closes (uses `aria-expanded`)
- Dark mode toggle that switches the whole page (uses `aria-pressed`)
- Nine products rendered from an array with `.map()`
- First three products shown, with a "View all" / "Show less" button
- Search that ignores letter case, checks every product (including hidden ones) and shows "No products found" when nothing matches
- FAQ accordion with five questions, opened with the mouse or keyboard
- Enquiry form and appointment form with controlled inputs and validation (empty and spaces-only values, email format, past dates)
- Visible labels, alt text on images and visible keyboard focus

## Set up and run

1. Clone the repository:
   ```
   git clone https://github.com/zeemah1234/az-atelier.git
   cd az-atelier
   ```
2. Install the packages:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open the link shown in the terminal, usually http://localhost:5173.

To make a production build, run `npm run build`.

## Project structure

```
public/images/        product, hero and about images
src/data.js           products and FAQ arrays
src/validation.js     email and date helpers
src/components/       Navbar, ThemeToggle, Hero, About, ProductList,
                      ProductCard, FAQ, Contact, EnquiryForm,
                      AppointmentForm, Footer
src/index.css         styles and light/dark colour variables
```

## Image credits

I got the each photos from the Unsplash app.
- Ankara-peplum: Studio YW, Unsplash, https://unsplash.com/photos/woman-in-ornate-blue-dress-and-headwrap-p5ewDl5mVWc
- aso-oke: McFollis, Unsplash, https://unsplash.com/photos/woman-in-green-dress-and-headwrap-r1vPrS9JDZ8
- Lace-mermaid: Jonathan Borba, Unsplash, https://unsplash.com/photos/woman-in-white-floral-wedding-dress--shn8ecaH2w
- off-shoulder: Promfy, Unsplash, https://unsplash.com/photos/a-white-wedding-dress-with-pink-flowers-on-a-mannequin-tVw_GvPEGyU
- office-blazer: Lonela Mat, Unsplash, https://unsplash.com/photos/a-person-wearing-a-jacket-and-jeans-qw3PKqZnzdE
- pencil-skirt: Doan Tien Hai, Unsplash, https://unsplash.com/photos/woman-in-white-dress-shirt-and-brown-slit-skit-standing-outside-during-daytime-qUgqizpEmQM
- satin-evening: FOTOGRAFIA EDITORIAL, Unsplash, https://unsplash.com/photos/woman-in-a-red-dress-with-a-high-slit-_kx6ShhfCvs
- senator-kaftan: Patrick Amofah, Unsplash, https://unsplash.com/photos/a-man-in-a-green-outfit-standing-in-a-hallway-MUsBHMkjPXU
- wrap-dress: James Lewis, Unsplash,, https://unsplash.com/photos/woman-in-seashore-ohiyigDmlYc

- Hero image:Iwari Inc., Unsplash, [link](https://unsplash.com/photos/a-group-of-colorful-objects-JnOFLg09yRE)
- About image: Vitaly Gariev, Unsplash, [link](https://unsplash.com/photos/fashion-designers-collaborating-and-working-in-a-studio-O6c8l2ROAYI)

## A challenge I solved

## A challenge I solved

When I added the Contact section, the page showed a red error saying Vite "failed to resolve import ./AppointmentForm". At first the Contact section only showed placeholder text, so I checked my files one by one. I found that `AppointmentForm.jsx` was empty and not named correctly, so `Contact.jsx` could not import it. I created the file with the right name, wrote the form with controlled inputs and validation, and saved it. The Contact section, both forms and the footer then appeared. I learned that every imported component must exist, be saved, and match its file name exactly, including capital letters.
