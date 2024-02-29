const categoryId = 3;
const category = {
    route: "/test",
    label: "Test"
};

function modify(categoryId, category) {
    const fields = Object.keys(category).map((field, index) => `"${field}" = $${index + 1}`);
    const values = Object.values(category);
    const timestamp = new Date().toISOString();
    fields.push(`"updatedAt" = $${fields.length + 1}`);
    const query = {
      text: `UPDATE category SET ${fields} WHERE id = $${fields.length + 1} RETURNING *`,
      values: [...values, timestamp, categoryId],
    };
    // const results = await client.query(query);
    // return results.rows[0];
    console.log(query);
  }

  modify(categoryId, category);
