const errorStatus = {
    ResultsLimitExceeded: 500
};

function toStatus(error) {
    const status = errorStatus[error.name];
    return status ?? 500;
}

function toMessage(error, defaultMessage = "internal server error") {
    return error.message ? error.message : defaultMessage;
}

function toResponse(error, defaultMessage) {
    return {
        message: toMessage(error, defaultMessage),
        status: toStatus(error)
    };
}

const errorMapping = { toStatus, toMessage, toResponse };

export default errorMapping;
