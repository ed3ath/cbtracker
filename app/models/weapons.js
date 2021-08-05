const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'weapons.txt');

const getWeaponList = async () => {
  const weaponList = fs.readFileSync(file, 'utf-8');
  if (weaponList) return weaponList.split('\n').map(t => t.replace(/\r?\n|\r/g, ''));
  return [];
};
const addWeaponList = async (weapId) => {
  const weaponList = await getWeaponList();
  if (!weaponList.includes(weapId)) {
    weaponList.push(weapId);
    fs.writeFileSync(file, weaponList.join('\n'));
  }
};
const removeWeaponList = async (weapId) => {
  const weaponList = await getWeaponList();
  const index = weaponList.indexOf(weapId);
  if (index > -1) {
    weaponList.splice(index, 1);
  }
  fs.writeFileSync(file, weaponList.join('\n'));
};
module.exports = {
  getWeaponList,
  addWeaponList,
  removeWeaponList,
};
