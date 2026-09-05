/**
 * Applies the saved theme and text-size preferences to <html> before the page
 * paints, so a returning dark-theme user never sees a flash of the light one.
 * Kept as a plain inline script (not an effect) because effects run after the
 * first paint — which is exactly the flash we are avoiding.
 */
const script = `(function(){try{
var d=document.documentElement,s=localStorage;
var t=s.getItem('mtnl-theme');
if(t!=='dark'&&t!=='light'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
if(t==='dark'){d.setAttribute('data-theme','dark');}else{d.setAttribute('data-theme','light');}
var f=s.getItem('mtnl-font-scale');
if(f==='sm'||f==='lg'||f==='xl'){d.setAttribute('data-font-scale',f);}
}catch(e){}})();`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
