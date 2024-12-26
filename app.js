const express = require('express');
const { sequelize } = require('./models');
const carRoutes = require('./routes/cars');
const customerRoutes = require('./routes/customers');
const parkingSlotRoutes = require('./routes/parkingslots');
const ticketRoutes = require('./routes/tickets');

const app = express();

// تنظیمات اولیه
app.use(express.json());

// روت‌ها
app.use('/api/cars', carRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/parkingslots', parkingSlotRoutes);
app.use('/api/tickets', ticketRoutes);

// همگام‌سازی پایگاه داده
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Database connected and synchronized');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
