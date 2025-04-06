// Convert user-friendly settings to cron expression
export const getCronExpression = (frequency: string, customHourly: boolean, hourlyMinute: string, hourlyInterval: string, time: string, weekdays: string[], monthDays: string[]) => {
    if (frequency === "hourly") {
        if (customHourly) {
            return `${hourlyMinute} */${hourlyInterval} * * *`;
        }
        return `${hourlyMinute} * * * *`;
    }

    const [hours, minutes] = time.split(":");

    switch (frequency) {
        case "daily":
            return `${minutes} ${hours} * * *`;
        case "weekly":
            return `${minutes} ${hours} * * ${weekdays.join(",")}`;
        case "monthly":
            return `${minutes} ${hours} ${monthDays.join(",")} * *`;
        default:
            return "0 0 * * *";
    }
};

export const getScheduleDescription = (frequency: string, customHourly: boolean, hourlyMinute: string, hourlyInterval: string, time: string, weekdays: string[], monthDays: string[]) => {
    if (frequency === "hourly") {
        if (customHourly) {
            return `Every ${hourlyInterval} hours at ${hourlyMinute} minutes past the hour`;
        }
        return `Every hour at ${hourlyMinute} minutes past the hour`;
    }

    const timeStr = new Date(`2000-01-01T${time}`).toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
    });

    switch (frequency) {
        case "daily":
            return `Every day at ${timeStr}`;
        case "weekly":
            return `Every ${weekdays.map((d) => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][Number(d)]).join(", ")} at ${timeStr}`;
        case "monthly":
            return `On day${monthDays.length > 1 ? "s" : ""} ${monthDays.join(", ")} of each month at ${timeStr}`;
        default:
            return "Schedule not set";
    }
};