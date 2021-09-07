interface ticket {
    // Цена в рублях
    price: number
    // Код авиакомпании (iata)
    carrier: string
    // Массив перелётов.
    // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
    segments:
        {
            // Код города (iata)
            origin: string
            // Код города (iata)
            destination: string
            // Дата и время вылета туда
            date: string
            // Массив кодов (iata) городов с пересадками
            stops: string[]
            // Общее время перелёта в минутах
            duration: number
        }[],
}

type TicketAction = {
    type: string
    tickets: ticket[]
}

interface TicketsState {
    tickets: ticket[];
    filteredTickets: ticket[];
    loading: boolean;
    error: null | string;
    limit: number,
}

interface filterItem {
    value: number
}

type DispatchType = (args: TicketAction) => TicketAction