
const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const stats = 422;
        const message = "Fill input Field the porperly";
        const extraDetails = err.errors[0].message;

        const errors = {
            stats,
            message,
            extraDetails
        }
        next(errors);
    }
}
module.exports = validate;