import mongoose, { Schema } from "mongoose";
import type BudgetSummaryEntity from "../../entity/budgetSummaryEntity";
import transactionSchema from "../../../transaction/mongo/schema/transactionSchema";

const Types = Schema.Types;

const budgetSummarySchema = new mongoose.Schema<BudgetSummaryEntity>(
  {
    id: Types.UUID,
    name: Types.String,
    limit: Types.Number,
    spent: Types.Number,
    startDate: Types.Date,
    endDate: Types.Date,
    transactions: [transactionSchema],
  },
  { strict: true, timestamps: true, versionKey: false }
);

export default budgetSummarySchema;
