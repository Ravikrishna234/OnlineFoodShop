## Overflow
Overflow controls the content that is too big to fit in an area
overflow: scroll; - Can view the entire content by scrolling
overflow: hidden; - Can View only content adjusted with width and height
## Padding
padding: top right Bottom Left 
## rem
Default root font size is 16px 
we can overide font size :root {font-size:20px;} ## Here 1 rem = 20 px
## em
It will inherit the parent's element font-size 
**em** can be used for padding
**em** for font size is not recommended use "rem" for font size
<div>
    <p>Hi</p>
</div>
div {font-size: 0.5 rem;} ## 8px
p {font-size: 1em;} ## Here 1em = 8px **p inherits the font size from its parent**
VIEW  