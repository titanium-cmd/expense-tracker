const Transaction = require('../model/Transaction');

//GET transactions...
const get_transaction = async (req, res) => {
    try {
        const transactions = await Transaction.find();  
        return res.status(400).json({
            success: true, 
            message: 'Data gotten successfully', 
            data: transactions
        });      
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `DB GET ERR: ${error.message}`,
            data: []
        })
        console.log(`DB GET ERR: ${error.message}`.red.underline.bold);
    }
}

//POST transactions...
const post_transaction = async (req, res) => {
    try {
        const transaction = new Transaction(req.body);
        console.log(req.body);
        const trasactionSaved = await transaction.save();    
        return res.status(201).json({
            success: true,
            message: 'Transaction added successfully', 
            data: trasactionSaved
        });    
    } catch (error) {
        const messages = Object.values(error.errors).map((val)=>val.message);
        console.log(`DB POST ERR: ${messages}`.red.underline.bold);
        if (error.name === 'ValidationError'){
            return res.status(400).json({
                success: false, 
                message: `DB POST ERR: ${error.message}`,
                errors: messages
            });
        }else{
            return res.status(500).json({
                success: false, 
                message: `DB POST ERR: ${error.message}`,
                data: []
            });
        }
    }
}

//DEL transactions...
const delete_transaction = async (req, res) => {
    try {
        await Transaction.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            success: true, 
            message: 'Transaction deleted succesfully', 
            data: {}
        });
    } catch (error) {
        console.log('Delete trans');
        return res.status(500).json({
            success: false, 
            message: `DB DELETE ERR: ${error.message}`,
            data: []
        });
    }
}

module.exports = {
    get_transaction, post_transaction, delete_transaction
}