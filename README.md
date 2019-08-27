# Basic Responsive Slideshow

### i. design
A minimal design with a focus on viewing the full image at any screen size rather than filling the space of the viewer. The viewer is full width with a dark gray background that matches the images I chose for demonstration in a muted, gallery style presentation.

### ii. development
* I took advantage of flexbox for both the main slideshow container and the control area. The container groups all slides side by side with no wrapping and keeps each slide the full width of the viewport so that slides can be shown by moving the whole group in increments of 100% widths at any screen size. Slide content is centered and images maintain their ratio at either orientation using `object-fit`.
* Animations use CSS transitions only for best performance.
* Next/Previous buttons are inline svgs from Material Design.
* All JS functionality is wrapped in an IIFE to maintain scope, particularly for reusability. Data attributes are assigned to each slide for ease of reference and pagination links are created at initialization. Since animations are in CSS the JS is only responsible for pagination setup, detecting clicks/touches and repositioning the slides.

### iii. areas for improvement
There are many areas for improvement here. It is not accessible to screen readers or even keyboard users, images could be more responsive by loading different sizes for different devices or using lazy loading when they are actually used. The YouTube video embedding works best at smaller sizes and controls are hidden at larger sizes. The swipe detection is very basic and could use more finesse in weeding out false positives and following the touch movements. An attempt at clean markup has been used for clarity and reusability but it currently does not allow for multiple slide viewers on the same page.

### iv. other
Development time was 8-9 hours--longer than expected due to a change of direction to using flex for the container midway through developing the interactivity.

All images courtesy artist Cyril Galmiche: [i-i-i-i-i-i.com/](https://i-i-i-i-i-i.com/)
