const size = {
    mobile: "375px",
    tablet: "670px",
    desktop: "1000px",
    desktopM: "1440px",
    desktopXl: "1750px",
  };
  


const setup = {

    fontSize: {
        homeText: "14px",
        detailText: "16px" 
      },
    
      fontWeight: {
        regular: 300,
        medium: 600,
        bold: 7800,
      },
    device: {
        mobile: `(min-width: ${size.mobile})`,
        tablet: `(min-width: ${size.tablet})`,
        desktop: `(min-width: ${size.desktop})`,
        desktopM: `(min-width: ${size.desktopM})`,
        desktopXl: `(min-width: ${size.desktopXl})`,
        
      },
}

export const ligth = {
    colors: {
        cardBg: "#fff",
        bg: "hsl(0, 0%, 98%)",
        text: "hsl(200, 15%, 8%)",
        input: "hsl(0, 0%, 52%)"
    },
    shadow: " 0px 5px 6px -4px rgba(207,207,207,1)",
    ...setup
}

export const dark = {
    colors:{
        cardBg: "hsl(209, 23%, 22%)",
        bg: "hsl(207, 26%, 17%)",
        text: "hsl(0, 0%, 100%)",
        input: "hsl(209, 23%, 22%)"
    },
    shadow: "0",
    ...setup
}