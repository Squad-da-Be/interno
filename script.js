// Dados simulados de vendas
const data = [
 { codigo: "QXTD", nome:"anabeltrandicas10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "1",Maio: "11", Junho: "2", Julho: "3", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "T5WZ", nome:"elaine10", vendas: "18", comissao: "R$: 391,17", bonus: "R$: 70", comissao_total:"R$: 461,17", Abril: "0",Maio: "2", Junho: "7", Julho: "17", Agosto: "30", Setembro: "17",ranking: "8" }, 
 { codigo: "AVE7", nome:"dicasdaclarinha10", vendas: "45", comissao: "R$: 998,05", bonus: "R$: 190", comissao_total:"R$: 1188,05", Abril: "255",Maio: "202", Junho: "120", Julho: "72", Agosto: "25", Setembro: "21",ranking: "4" }, 
 { codigo: "VBQ4", nome:"majestade10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "2", Setembro: "0",ranking: "37" }, 
 { codigo: "SSW8", nome:"CHRISMENEZES10", vendas: "110", comissao: "R$: 2343,85", bonus: "R$: 540", comissao_total:"R$: 2883,85", Abril: "0",Maio: "0", Junho: "0", Julho: "8", Agosto: "108", Setembro: "176",ranking: "3" }, 
 { codigo: "3ERF", nome:"alivia10", vendas: "186", comissao: "R$: 4037,31", bonus: "R$: 540", comissao_total:"R$: 4577,31", Abril: "32",Maio: "25", Junho: "1", Julho: "2", Agosto: "37", Setembro: "194",ranking: "1" }, 
 { codigo: "OD96", nome:"miihmourao10", vendas: "3", comissao: "R$: 86,4", bonus: "R$: 0", comissao_total:"R$: 86,4", Abril: "0",Maio: "18", Junho: "16", Julho: "63", Agosto: "16", Setembro: "5",ranking: "17" }, 
 { codigo: "1576", nome:"peace10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", Abril: "1",Maio: "15", Junho: "4", Julho: "8", Agosto: "1", Setembro: "0",ranking: "25" }, 
 { codigo: "AS61", nome:"manoelarosa10", vendas: "29", comissao: "R$: 626,37", bonus: "R$: 190", comissao_total:"R$: 816,37", Abril: "0",Maio: "0", Junho: "0", Julho: "2", Agosto: "45", Setembro: "56",ranking: "5" }, 
 { codigo: "HT7F", nome:"JUHVITAMINA10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "2",ranking: "25" }, 
 { codigo: "UIL2", nome:"beautyrayy10", vendas: "3", comissao: "R$: 64,8", bonus: "R$: 0", comissao_total:"R$: 64,8", Abril: "0",Maio: "0", Junho: "2", Julho: "7", Agosto: "3", Setembro: "4",ranking: "17" }, 
 { codigo: "EU3Z", nome:"obatempromo10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "1",Maio: "0", Junho: "0", Julho: "1", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "ICT8", nome:"priirubio10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "3",Maio: "0", Junho: "1", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "DRJI", nome:"achadinhos10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "2", Junho: "0", Julho: "0", Agosto: "2", Setembro: "0",ranking: "37" }, 
 { codigo: "PI7C", nome:"promosualinda10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "1",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "OQT9", nome:"adoramospromocao10", vendas: "4", comissao: "R$: 63,19", bonus: "R$: 0", comissao_total:"R$: 63,19", Abril: "7",Maio: "0", Junho: "1", Julho: "26", Agosto: "10", Setembro: "2",ranking: "15" }, 
 { codigo: "62FP", nome:"suellem10", vendas: "26", comissao: "R$: 561,6", bonus: "R$: 190", comissao_total:"R$: 751,6", Abril: "0",Maio: "22", Junho: "13", Julho: "9", Agosto: "5", Setembro: "19",ranking: "6" }, 
 { codigo: "FSVS", nome:"PRISCILAROLLO10", vendas: "9", comissao: "R$: 194,39", bonus: "R$: 20", comissao_total:"R$: 214,39", Abril: "2",Maio: "27", Junho: "26", Julho: "25", Agosto: "20", Setembro: "4",ranking: "12" }, 
 { codigo: "W1DT", nome:"PROMOLOUCAS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "3R4A", nome:"DICABARATEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "4", Agosto: "2", Setembro: "0",ranking: "37" }, 
 { codigo: "DQLM", nome:"OQUEELAAMA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "8", Agosto: "7", Setembro: "7",ranking: "37" }, 
 { codigo: "QH6I", nome:"DICASDEBELEZADAGAH10", vendas: "1", comissao: "R$: 10,88", bonus: "R$: 0", comissao_total:"R$: 10,88", Abril: "0",Maio: "0", Junho: "1", Julho: "1", Agosto: "8", Setembro: "1",ranking: "25" }, 
 { codigo: "NKRO", nome:"BRUNABEAUTY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "1", Agosto: "1", Setembro: "0",ranking: "37" }, 
 { codigo: "6C39", nome:"MELANDRADE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "SM4U", nome:"DIADEBELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "FAMX", nome:"MARCELAPAIVA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "22XR", nome:"DICASENTREDICAS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "MVJA", nome:"ESTHERGOMES10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "2", Agosto: "0", Setembro: "1",ranking: "37" }, 
 { codigo: "34Y7", nome:"MILENAMARTIL10", vendas: "12", comissao: "R$: 250,87", bonus: "R$: 70", comissao_total:"R$: 320,87", Abril: "0",Maio: "0", Junho: "0", Julho: "22", Agosto: "49", Setembro: "24",ranking: "10" }, 
 { codigo: "6R45", nome:"ROTINADEUMAPELE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "UEK9", nome:"RESANTANA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "4", Agosto: "4", Setembro: "2",ranking: "37" }, 
 { codigo: "X9KE", nome:"ACHADOSDEPRECINHOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "0",ranking: "37" }, 
 { codigo: "7BU7", nome:"BIALOU10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "29", Agosto: "12", Setembro: "0",ranking: "37" }, 
 { codigo: "LL54", nome:"DICASDANESSA10", vendas: "162", comissao: "R$: 3487,6", bonus: "R$: 540", comissao_total:"R$: 4027,6", Abril: "0",Maio: "0", Junho: "0", Julho: "100", Agosto: "394", Setembro: "295",ranking: "2" }, 
 { codigo: "HG44", nome:"BLOGDABELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "E5ZJ", nome:"LUIZACORTI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "2", Agosto: "3", Setembro: "0",ranking: "37" }, 
 { codigo: "V4C8", nome:"COISASDATAY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "JHDE", nome:"BLOGDICAJU10", vendas: "1", comissao: "R$: 10,88", bonus: "R$: 0", comissao_total:"R$: 10,88", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "6",ranking: "25" }, 
 { codigo: "FEL1", nome:"DICASBYDEIA10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", Abril: "0",Maio: "0", Junho: "0", Julho: "3", Agosto: "9", Setembro: "1",ranking: "25" }, 
 { codigo: "ZW2O", nome:"BLOOGUERICES10", vendas: "2", comissao: "R$: 45,59", bonus: "R$: 0", comissao_total:"R$: 45,59", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "2",ranking: "22" }, 
 { codigo: "KFCB", nome:"RICHELEMELO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "CNBP", nome:"EMYLOHANA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "1",ranking: "37" }, 
 { codigo: "HL8B", nome:"JULIADEOLINDO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "1X5G", nome:"OHLIVIAMARIA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "1", Agosto: "0", Setembro: "3",ranking: "37" }, 
 { codigo: "TKIZ", nome:"MAISDEBELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "Z1JU", nome:"VALERIARODRIGUES10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "MAQS", nome:"GAROTAPODEROSA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "NJ5J", nome:"MELHORACHADINHOONLINE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "3", Setembro: "3",ranking: "37" }, 
 { codigo: "3LDV", nome:"EVOLUIDAPELE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "35", Setembro: "16",ranking: "37" }, 
 { codigo: "H5OX", nome:"JESSICANATALIA10", vendas: "9", comissao: "R$: 194,4", bonus: "R$: 20", comissao_total:"R$: 214,4", Abril: "0",Maio: "0", Junho: "0", Julho: "1", Agosto: "7", Setembro: "22",ranking: "12" }, 
 { codigo: "3W4Z", nome:"TIPSBYMAI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "BW6M", nome:"DICASDAHAI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "0",ranking: "37" }, 
 { codigo: "DFLW", nome:"CUIDADOSDAISA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "10", Setembro: "7",ranking: "37" }, 
 { codigo: "KQ67", nome:"PRISCILALIROW10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "13", Setembro: "2",ranking: "25" }, 
 { codigo: "M1V3", nome:"JULIALANDIM10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "DAGE", nome:"THATS10", vendas: "20", comissao: "R$: 432", bonus: "R$: 190", comissao_total:"R$: 622", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "27", Setembro: "20",ranking: "7" }, 
 { codigo: "HC8W", nome:"BYLUANASANTOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "X6Z1", nome:"ACHADINHOSDAINDY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "17EX", nome:"BIAGIFFONI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "3",ranking: "37" }, 
 { codigo: "EJ12", nome:"DUDAMDAILY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "8LXB", nome:"LULINDAILY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "OUZ4", nome:"TAIZELIMA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "L4BE", nome:"TANARAFP10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "1",ranking: "25" }, 
 { codigo: "OB81", nome:"GARIMPONLINE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "YP1F", nome:"VICRUZS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "GHTR", nome:"VAHTORQUATOBEAUTY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "AUQ7", nome:"MACEDAILYY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "NKZ9", nome:"MALUMEDINA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "2", Setembro: "0",ranking: "37" }, 
 { codigo: "FPJX", nome:"NUTRIMILAALMEIDA10", vendas: "12", comissao: "R$: 261,59", bonus: "R$: 70", comissao_total:"R$: 331,59", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "5", Setembro: "4",ranking: "10" }, 
 { codigo: "LRZU", nome:"BRENDOLETA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "1",ranking: "37" }, 
 { codigo: "6OS6", nome:"DICASCOMABRU10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "2", Setembro: "8",ranking: "37" }, 
 { codigo: "VMVN", nome:"THAISSIMOESADV10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "25" }, 
 { codigo: "75IQ", nome:"JOYCECUSTODIO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "5",ranking: "37" }, 
 { codigo: "P1BK", nome:"RAFAELAULLA10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "1",ranking: "25" }, 
 { codigo: "UEYY", nome:"BRUNOCASTILHO10", vendas: "3", comissao: "R$: 64,8", bonus: "R$: 0", comissao_total:"R$: 64,8", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "7", Setembro: "3",ranking: "17" }, 
 { codigo: "118X", nome:"ISABELAFERRER10", vendas: "4", comissao: "R$: 86,4", bonus: "R$: 0", comissao_total:"R$: 86,4", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "2",ranking: "15" }, 
 { codigo: "LOCP", nome:"SNAKEPROMOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "IA49", nome:"CAMILASANTOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "2",ranking: "37" }, 
 { codigo: "TRFZ", nome:"ALINEFUNGACS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "ZHY6", nome:"LARIXDIAS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "L7Y7", nome:"IZABARREIROS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "3",ranking: "37" }, 
 { codigo: "6PQA", nome:"LAISVELOSO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "R1M9", nome:"ACHADINHOSDAMI10", vendas: "9", comissao: "R$: 183,68", bonus: "R$: 20", comissao_total:"R$: 203,68", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "1",ranking: "12" }, 
 { codigo: "YWVX", nome:"BELLAEISABELLA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "9LHY", nome:"SAMIRESCOSTA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "HXRJ", nome:"CARLASERVULO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "X1RF", nome:"DENISERAMOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "Y232", nome:"DEBORAFISTAROL10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "G7MK", nome:"ANINHAPELOSINI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "62BK", nome:"DOMENICAVANKERCKHOVE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "ZSX5", nome:"BIABENETTE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "6SNV", nome:"GABRIELAFRAGOSO10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "25" }, 
 { codigo: "17LQ", nome:"NATALIAROSA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "UYZR", nome:"PAMELAARGIBAY10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "25" }, 
 { codigo: "RPAZ", nome:"ROTINADEPROMOS10", vendas: "3", comissao: "R$: 62,98", bonus: "R$: 0", comissao_total:"R$: 62,98", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "17" }, 
 { codigo: "FQKF", nome:"VICIEINAPROMO10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "22" }, 
 { codigo: "NC2O", nome:"SUTTICAMILA10", vendas: "14", comissao: "R$: 302,4", bonus: "R$: 70", comissao_total:"R$: 372,4", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "9" }, 
 { codigo: "Y8YV", nome:"MAIRAFRAGOSO10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "25" }, 
 { codigo: "BTFS", nome:"MILAMUNIZ10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "Z8JJ", nome:"PROMOCAOSO10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "22" }, 
 { codigo: "LT1I", nome:"CAPOBIANNCO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "AGK6", nome:"KELLYSILVA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "Y61F", nome:"RENATAALBERT10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "FIWX", nome:"THAISCARMO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "PUCP", nome:"ACHADINHOSYOU10", vendas: "3", comissao: "R$: 64,8", bonus: "R$: 0", comissao_total:"R$: 64,8", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "17" }, 
 { codigo: "MRKT", nome:"SOLDAPRAIA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "GEQM", nome:"MICHELLYARRUDA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "Z4RI", nome:"JULIAMEDINA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "OIBG", nome:"FERNANDALONGO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "1XFM", nome:"CHRISEVERT10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "89B9", nome:"JULYANACALENTE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "PRJF", nome:"ANAPAULA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "13RO", nome:"ANESOUZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" }, 
 { codigo: "UFTC", nome:"JOSIELY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0",ranking: "37" },

 
    // Adicione os dados restantes da sua planilha
];
// Elementos do DOM
const codigoInput = document.getElementById("codigoInput");
const buscarButton = document.getElementById("buscarButton");
const resultadoDiv = document.getElementById("resultado");
// Event listener para o botão de busca
buscarButton.addEventListener("click", () => {
    const codigo = codigoInput.value;
    // Procurando o produto pelo código
    const produto = data.find(item => item.codigo === codigo);
    if (produto) {
        // Exibindo os detalhes do produto se encontrado
        resultadoDiv.innerHTML = `
            <p><strong>Nome:</strong> ${produto.nome}</p>
            <p><strong>Vendas:</strong> ${produto.vendas}</p>
            <p><strong>Comissão:</strong> ${produto.comissao}</p>
            <p><strong>Bônus:</strong> ${produto.bonus}</p>
            <p><strong>Comissão final:</strong> ${produto.comissao_total}</p>
            <p><strong>Sua posição no ranking mensal é:</strong> ${produto.ranking}</p>
            <br>
            <br>
           <style>
           .linha-tracada {
           text-align: center;
           border-bottom: 1px dashed #000; /* 1px de largura, tracejada, cor preta */
           }
           </style>

<p class="linha-tracada"><strong>Histórico de Pedidos</strong></p>

  <br>
  
  <p><strong>Abril: </strong> ${produto.Abril}</p>
  <p><strong>Maio: </strong> ${produto.Maio}</p>
  <p><strong>Junho: </strong> ${produto.Junho}</p>
  <p><strong>Julho: </strong> ${produto.Julho}</p>
  <p><strong>Agosto: </strong> ${produto.Agosto}</p>
  <p><strong>Setembro: </strong> ${produto.Setembro}</p>



        `;
    } else {
        // Exibindo mensagem se o produto não for encontrado
        resultadoDiv.innerHTML = "<p>Código não encontrado.</p>";
    }
});
