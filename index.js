    //header element
    const header = document.createElement("header");
    header.classList.add("header");
  
    // nav element
    const nav = document.createElement("nav");
    const logoLink = document.createElement("a");
    logoLink.href = "index.html";
    logoLink.classList.add("logo");
    const logoImg = document.createElement("img");
    logoImg.src = "logo.svg";
    logoLink.appendChild(logoImg);
    nav.appendChild(logoLink);
  
    const navbar = document.createElement("div");
    navbar.classList.add("navbar");
    const navItems = ["About", "Careers", "Events", "Products", "Support"];
    navItems.forEach(item => {
      const navLink = document.createElement("a");
      navLink.textContent = item;
      navbar.appendChild(navLink);
    });
    nav.appendChild(navbar);
  
    header.appendChild(nav);
  
    const textBox = document.createElement("div");
    textBox.classList.add("text-box");
    textBox.textContent = "IMMERSIVE EXPERIENCES THAT DELIVER";
    header.appendChild(textBox);
  
    document.body.appendChild(header);
  
    //section1 element
    const section1 = document.createElement("section");
    section1.classList.add("section1");
  
    const image1a = document.createElement("div");
    image1a.classList.add("image1a");
    const image1 = document.createElement("img");
    image1.src = "image-interactive.jpg";
    image1.height = 1000;
    image1.width = 1400;
    image1a.appendChild(image1);
    section1.appendChild(image1a);
  
    const text2 = document.createElement("div");
    text2.classList.add("text-box2");
    text2.innerHTML = "<h1>THE LEADER IN INTERACTIVE VR</h1><br><p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>";
    section1.appendChild(text2);
  
    document.body.appendChild(section1);
  
    //section2 element
    const section2 = document.createElement("section");
    section2.classList.add("section2");
  
    const heading1 = document.createElement("div");
    heading1.classList.add("heading1");
    heading1.innerHTML = "<h1>OUR CREATIONS</h1>";
    section2.appendChild(heading1);
  
    const btn = document.createElement("div");
    btn.classList.add("btn");
    const btn1 = document.createElement("button");
    btn1.classList.add("btn1");
    btn1.textContent = "SEE ALL";
    btn.appendChild(btn1);
    section2.appendChild(btn);
  
    document.body.appendChild(section2);
  
    //imggal section
   
const section = document.createElement('section');
section.classList.add('imggal');

const row1 = document.createElement('div');
row1.classList.add('row');

const imgname1 = document.createElement('div');
imgname1.classList.add('imgname1');
imgname1.innerHTML = '<p>DEEP EARTH</p>';

const imgname2 = document.createElement('div');
imgname2.classList.add('imgname2');
imgname2.innerHTML = '<p>NIGHT ARCADE</p>';

const imgname3 = document.createElement('div');
imgname3.classList.add('imgname3');
imgname3.innerHTML = '<p>SOCCER TEAM VR</p>';

const imgname4 = document.createElement('div');
imgname4.classList.add('imgname4');
imgname4.innerHTML = '<p>THE GRID</p>';

row1.appendChild(imgname1);
row1.appendChild(imgname2);
row1.appendChild(imgname3);
row1.appendChild(imgname4);

const row2 = document.createElement('div');
row2.classList.add('row2');

const imgname5 = document.createElement('div');
imgname5.classList.add('imgname5');
imgname5.innerHTML = '<p>FROM UP ABOVE VR</p>';

const imgname6 = document.createElement('div');
imgname6.classList.add('imgname6');
imgname6.innerHTML = '<p>POCKET BOREALIS</p>';

const imgname7 = document.createElement('div');
imgname7.classList.add('imgname7');
imgname7.innerHTML = '<p>THE CURIOSITY</p>';

const imgname8 = document.createElement('div');
imgname8.classList.add('imgname8');
imgname8.innerHTML = '<p>MAKE IT FISHEYE</p>';

row2.appendChild(imgname5);
row2.appendChild(imgname6);
row2.appendChild(imgname7);
row2.appendChild(imgname8);

section.appendChild(row1);
section.appendChild(row2);

document.body.appendChild(section);
document.body.appendChild(imggal);
  
    // footer element
    const footer = document.createElement("footer");
    footer.classList.add("footer");
  
    const footer1 = document.createElement("div");
    footer1.classList.add("footer1");
    const logo = document.createElement("img");
    logo.classList.add("logo");
    logo.src = "logo.svg";
    footer1.appendChild(logo);
  
    const smLogos = document.createElement("div");
    smLogos.classList.add("smlogos");
    const socialMedia = ["icon-facebook.svg", "icon-twitter.svg", "icon-pinterest.svg", "icon-instagram.svg"];
    socialMedia.forEach(icon => {
      const link = document.createElement("a");
      link.href = "https://nasiya1.github.io/Bootcamp/";
      const img = document.createElement("img");
      img.src = icon;
      link.appendChild(img);
      smLogos.appendChild(link);
    });
    footer1.appendChild(smLogos);
  
    footer.appendChild(footer1);
  
    const footer2 = document.createElement("div");
    footer2.classList.add("footer2");
    const bottomNav = document.createElement("div");
    bottomNav.classList.add("bottomnav");
    bottomNav.textContent = "About Careers Events Products Support";
    footer2.appendChild(bottomNav);
  
    const copyright = document.createElement("div");
    copyright.classList.add("copyright");
    copyright.textContent = "© 2021 Loopstudios. All rights reserved.";
    footer2.appendChild(copyright);
  
    footer.appendChild(footer2);
  
    