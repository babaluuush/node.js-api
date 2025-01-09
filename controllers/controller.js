const Contact = require('../models/model');

exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

exports.getContactById = async (req, res) => {
    try {
        const contactId = req.params.id;
        const contact = await Contact.findById(contactId);

        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

exports.createContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create contact', error });
    }
};

exports.updateContact = async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update contact', error });
    }
};

exports.deleteContact = async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);

        if (!deletedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete contact', error });
    }
};
