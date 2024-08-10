import { Menu } from "./Content";
export function NewMenu() {
  const menu: Menu = { name: "", price: 0, isAvailable: false };

  const handleCreateMenu = () => {
    console.log(menu);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: 250 }}>
      <input
        type="text"
        placeholder="Name"
        style={{ height: 30, marginBottom: 10 }}
        onChange={(evt) => {
          menu.name = evt.target.value;
        }}
      />
      <input
        type="number"
        placeholder="Price"
        style={{ height: 30, marginBottom: 10 }}
        onChange={(evt) => {
          menu.price = Number(evt.target.value);
        }}
      />

      <div>
        <input
          type="checkbox"
          onChange={(evt) => {
            menu.isAvailable = !menu.isAvailable;
          }}
        />
        <span>Available</span>
      </div>
      <button
        onClick={handleCreateMenu()}
        style={{ marginTop: 15, width: "fit-content" }}
      >
        Create
      </button>
    </div>
  );
}
