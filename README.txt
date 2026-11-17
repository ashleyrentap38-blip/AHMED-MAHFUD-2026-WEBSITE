AHMED CREATIVE & COLOURFUL WEBSITE
=================================

HOW TO OPEN
1. Extract the ZIP file.
2. Open the ahmed_creative_colourful folder.
3. Double-click index.html in Microsoft Edge or Chrome.
4. Keep all HTML files, style.css, script.js, and the images folder together.

PAGES
index.html        - Home
Bground.html      - Background (original filename preserved)
Achievement.html  - Achievements
Gallery.html      - Gallery
Contact.html      - Contact

HOW TO ADD A PROFILE PHOTO
1. Save a photo as images/ahmed.jpg.
2. In index.html, find <div class="avatar-initials">AR</div> and replace it with:
   <img src="images/ahmed.jpg" alt="Ahmed" class="profile-image">
3. Add to the END of style.css:
   .profile-image {width:100%;height:100%;object-fit:cover;border-radius:inherit;}
4. To change the Background page picture, find <div class="bio-avatar"> ... </div>
   and replace its contents with <img src="images/ahmed.jpg" alt="Ahmed" class="profile-image">

HOW TO ADD GALLERY PHOTOS
1. Copy photos to images/ (example: images/rugby.jpg).
2. In Gallery.html find the relevant <button class="gallery-item" ...>.
3. Set data-image="images/rugby.jpg" on that button.
4. Replace the emoji inside <span class="gallery-icon"> with:
   <img src="images/rugby.jpg" alt="Rugby moments" class="gallery-photo">
5. Add this CSS to the end of style.css:
   .gallery-photo {position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
   .gallery-text {position:relative;z-index:2;background:#ffffffdc;padding:8px 15px;border-radius:12px;}

HOW TO EDIT CONTACT EMAIL
- In script.js, set const AHMED_EMAIL = 'actual@example.com';
- The contact form opens an email app; it does NOT send messages directly from the website.
- Add Ahmed's email and social links to Contact.html.

IMPORTANT
- Achievement cards and gallery tiles are placeholders, NOT claims about Ahmed.
- The fonts load from Google Fonts when online; fallback fonts work offline.
- The website works by opening index.html locally, no server required.

UPDATED: Ahmed profile image is included at images/ahmed-profile.png and appears on Home, Background and Gallery. Other gallery slots are placeholders until additional photos are supplied.
