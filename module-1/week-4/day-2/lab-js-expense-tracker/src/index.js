// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount() {
    return `${this.amount} €`;
  }
}

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description);
    this.type = "income";
  }
}
const income1 = {
  date: "Today",
  amount: 50,
  description: "I cut my neighbors lawn",
  type: "income",
};
// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.paid = paid;
    this.type = "expense";
  }
  getFormattedAmount() {
    return `-${this.amount} €`;
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = [];
  }
  addEntry(anEntry) {
    this.entries.push(anEntry);
  }
  getCurrentBalance() {
    let total = 0;
    this.entries.forEach((oneEntry) => {
      if (oneEntry.type === "income") {
        total += oneEntry.amount;
      } else if (oneEntry.type === "expense") {
        total -= oneEntry.amount;
      }
    });
    return total;
  }
  getFormattedEntries() {
    const arrayOfEntries = [];
    this.entries.forEach((entry) => {
      //short version
      arrayOfEntries.push(
        `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`,
      );

      //the long method
      //   if (entry.type === "income") {
      //     const formattedString = `${entry.date} | ${entry.description} | ${entry.amount} €`;
      //     arrayOfEntries.push(formattedString);
      //   } else if (entry.type === "expense") {
      //     const formattedString = `${entry.date} | ${entry.description} | -${entry.amount} €`;
      //     arrayOfEntries.push(formattedString);
      //   }
    });

    return arrayOfEntries;
  }
}
