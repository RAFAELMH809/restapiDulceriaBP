const models = require ('../database/models');

const createDulce = async (req, res) => {
 console.log('creating dulce');
        try{
        const dulce = await models.Dulce.create(req.body);

        return res.status(201).json({ dulce });
        }
        catch (error) {
        return res.status(500).send ( error.message);
        }

};
const  deleteDulce  = async (req,  res)  =>  {
   console.log('deleting dulce...');

   try {
      const dulce = await models.Dulce.findOne({ where: { id: req.params.id } });
      if (dulce) {
	  console.log(dulce);
          await dulce.destroy();
      } 
      else {
         return res.status(200).json( { "error ": req.params.id  +  " no existe"});
      } 
      return res.status(200).json( { "deleted ": req.params.id });
   }
   catch  (error) {
      return res.status(500).send ( { error: error.message  } );
   }

};

const updateDulce  = async (req,  res)  =>  {
   console.log('updating dulce...');
   console.log(models);
   try {
      const dulce = await models.Dulce.findOne({ where: { id: req.params.id } });
      if (dulce) {
         console.log(dulce);
     dulce.nombre = req.body.nombre;
     dulce.precio = req.body.precio;
     dulce.cantidad = req.body.cantidad;
     dulce.descripcion = req.body.descripcion;
     await dulce.save();
      }
      else {
         return res.status(200).json( { "error ": req.params.id  +  " no existe"});
      }

      return res.status(200).json( { "updated ": dulce });
   }
   catch  (error) {
      return res.status(500).send ( { error: error.message  } );
   }

};

const getAllDulces = async (req, res) => {
 console.log('getting dulces');
        try{
        const dulces = await models.Dulce.findAll({
         include: [ ]
        });
        return res.status(200).json({ dulces });
        }
        catch (error) {
        return res.status(500).send ( error.message);
        }

};
module.exports = {
  createDulce,
  getAllDulces,
  deleteDulce,
  updateDulce
};
