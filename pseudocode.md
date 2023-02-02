# CREATE IMAGE GALLERY

## ABOUT:
- Create an image gallery that will display all of the provided images as a set of thumbnails.
<br>
- When a thumbnail is clicked it will display the large version of the image above the set of thumbnails.
<br>
- A button will be displayed on the large image that will allow the user to darken the image and then lighten the image.

## INIT: Create, define and list variable properties.
1. **LARGE IMAGE BOX:**
    * the image selected is displayed here
    <br>
    ***PROPERTIES***  
    -arrayPics (array listing file name of each image)  
    -arrayAlt (object listing the alt text for each image)
    -displayImage (displays image selected)  
    -full-img (css)
    -EventListener (click)
    <br>
    <br>
2. **DARKEN FEATURE:**
    * button that darkens or lightens the image when clicked
    * uses a semi-transparent overlay on top of the full image to darken image
    * removes overlay to lighten image
    <br> 
    ***PROPERTIES***  
    -drkBtn (button)
    -overlay (css)
    -EventListener (click)
    <br>
    <br>
3. **THUMBNAIL IMAGES BAR:**
    * row(s) of the images in a thumbnail size
    * all thumbnails need to be the same size vertically, (20%)
    * clicking on thumbnail displays full image in Large Image Box  
    ***PROPERTIES***  
    -arrayPics20h  
    -thumb-bar (css)
    <br>
    <br>


## Functionality:

**IMAGE GALLERY**  

    FUNCTION thumb-bar
        * displays full-img
        * displays darkLightButton

    FUNCTION click darkLightButton
        * displays overlay over full-img
        * removes overlay

**EXTRA**

    FUNCTION randomImage
        * selects a random image display as the full.img  

## START: Start program

    largeImgBox
    randomImg
    darkLightButton
    thumbBar

## END: End program  