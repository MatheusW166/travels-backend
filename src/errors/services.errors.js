class ResultsLimitExceeded extends Error {
    constructor() {
        super("results limit exceeded");
        super.name = ResultsLimitExceeded.name;
    }
}

export { ResultsLimitExceeded };
