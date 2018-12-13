// JS Goes here - ES6 supported
import SmilesDrawer from 'smiles-drawer';
SmilesDrawer.apply();

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}
