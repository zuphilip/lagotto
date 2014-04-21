//= require api_requests/index

describe("api_requests index", function() {

  var json = {"total":157,"total_pages":1,"page":1,"error":null,"data":[{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":6.54819,"view_duration":54.2136,"date":"2014-04-19 09:25:14 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::ArticlesController","db_duration":143.846,"view_duration":3702.56,"date":"2014-04-19 09:24:18 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.26089,"view_duration":9.3618,"date":"2014-04-19 09:24:01 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":7.28373,"view_duration":145.997,"date":"2014-04-19 09:23:36 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":5.72298,"view_duration":51.1375,"date":"2014-04-19 00:11:57 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":"citeulike","ids":"Api::V5::SourcesController","db_duration":10.4716,"view_duration":475.822,"date":"2014-04-19 00:11:43 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.61971,"view_duration":8.5625,"date":"2014-04-19 00:11:39 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.38316,"view_duration":12.9839,"date":"2014-04-19 00:11:31 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":23.9827,"view_duration":228.535,"date":"2014-04-19 00:06:29 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":"mendeley","ids":"Api::V5::SourcesController","db_duration":43.6306,"view_duration":837.392,"date":"2014-04-19 00:06:26 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.03618,"view_duration":7.05629,"date":"2014-04-18 15:53:32 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::ApiRequestsController","db_duration":2.07059,"view_duration":38.7111,"date":"2014-04-18 15:53:30 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::ApiRequestsController","db_duration":2.6007,"view_duration":240.705,"date":"2014-04-18 15:53:27 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":35.7402,"view_duration":547.049,"date":"2014-04-18 15:52:28 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":11.0665,"view_duration":435.756,"date":"2014-04-18 15:51:22 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":9.71043,"view_duration":80.3854,"date":"2014-04-18 15:37:20 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":217.634,"view_duration":2318.38,"date":"2014-04-18 15:37:12 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":14.3838,"view_duration":281.327,"date":"2014-04-18 13:46:20 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":25.0063,"view_duration":521.925,"date":"2014-04-18 11:48:40 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":13.1546,"view_duration":384.399,"date":"2014-04-18 11:44:03 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":6.34168,"view_duration":55.6707,"date":"2014-04-18 11:13:05 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.81859,"view_duration":9.23775,"date":"2014-04-18 11:13:03 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":9.48126,"view_duration":64.6291,"date":"2014-04-18 11:13:00 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":12.8601,"view_duration":72.6738,"date":"2014-04-18 11:12:57 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":9.66988,"view_duration":284.133,"date":"2014-04-18 11:12:55 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":"reddit","ids":"Api::V5::SourcesController","db_duration":7.70737,"view_duration":87.2929,"date":"2014-04-18 10:11:40 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.98056,"view_duration":12.7221,"date":"2014-04-18 10:11:38 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":95.0075,"view_duration":63.0215,"date":"2014-04-18 10:11:34 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.57073,"view_duration":27.0961,"date":"2014-04-18 10:11:32 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":3.88815,"view_duration":4.35891,"date":"2014-04-18 10:10:16 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":2.0768,"view_duration":11.8804,"date":"2014-04-18 10:10:15 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":11.3789,"view_duration":109.58,"date":"2014-04-18 10:10:10 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":2.20426,"view_duration":7.79058,"date":"2014-04-18 10:10:09 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":9.55086,"view_duration":21.9554,"date":"2014-04-18 10:09:43 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":17.6895,"view_duration":4.38983,"date":"2014-04-18 10:08:53 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.01459,"view_duration":7.61148,"date":"2014-04-18 10:08:49 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":48.6221,"view_duration":1309.38,"date":"2014-04-18 10:08:26 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.54556,"view_duration":11.5668,"date":"2014-04-18 00:22:54 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":7.45357,"view_duration":108.208,"date":"2014-04-18 00:17:46 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.26578,"view_duration":8.91151,"date":"2014-04-18 00:17:40 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":16.9099,"view_duration":19.0971,"date":"2014-04-18 00:17:35 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":9.04683,"view_duration":14.2745,"date":"2014-04-18 00:17:23 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":16.792,"view_duration":120.387,"date":"2014-04-18 00:17:17 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":"citeulike","ids":"Api::V5::SourcesController","db_duration":1.28709,"view_duration":10.9465,"date":"2014-04-18 00:17:16 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.34556,"view_duration":7.591,"date":"2014-04-18 00:17:15 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":14.0665,"view_duration":211.779,"date":"2014-04-18 00:17:13 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":"citeulike","ids":"Api::V5::SourcesController","db_duration":2.00469,"view_duration":24.8963,"date":"2014-04-17 21:41:43 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.19892,"view_duration":6.63282,"date":"2014-04-17 21:41:38 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":5.75281,"view_duration":4.76326,"date":"2014-04-17 21:41:36 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":6.50512,"view_duration":53.8601,"date":"2014-04-17 21:41:33 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.34479,"view_duration":8.07724,"date":"2014-04-17 21:41:32 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.05993,"view_duration":5.69239,"date":"2014-04-17 20:56:57 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":12.5756,"view_duration":13.043,"date":"2014-04-17 20:56:54 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":6.55184,"view_duration":63.614,"date":"2014-04-17 20:56:48 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":10.0069,"view_duration":128.72,"date":"2014-04-17 20:56:45 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::ApiRequestsController","db_duration":2.28269,"view_duration":132.09,"date":"2014-04-17 20:56:31 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.43987,"view_duration":9.91877,"date":"2014-04-17 20:56:23 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":8.61067,"view_duration":73.2803,"date":"2014-04-17 20:56:22 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":38.761,"view_duration":507.941,"date":"2014-04-17 20:48:34 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":10.2992,"view_duration":83.0162,"date":"2014-04-17 20:40:53 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":146.62,"view_duration":2041.82,"date":"2014-04-17 20:40:46 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.79775,"view_duration":10.571,"date":"2014-04-16 11:57:17 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":39.1161,"view_duration":338.723,"date":"2014-04-16 05:24:18 UTC"},{"api_key":"12345","info":null,"source":"citeulike","ids":"Api::V5::SourcesController","db_duration":2.1726,"view_duration":10.6343,"date":"2014-04-16 02:25:21 UTC"},{"api_key":"12345","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":3.21914,"view_duration":7.52652,"date":"2014-04-16 02:25:21 UTC"},{"api_key":"12345","info":null,"source":"citeulike","ids":"Api::V5::SourcesController","db_duration":3.43912,"view_duration":11.8727,"date":"2014-04-16 02:25:10 UTC"},{"api_key":"12345","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":2.99149,"view_duration":15.0435,"date":"2014-04-16 02:25:10 UTC"},{"api_key":"12345","info":null,"source":"citeulike","ids":"Api::V5::SourcesController","db_duration":2.5095,"view_duration":5.77338,"date":"2014-04-16 02:25:07 UTC"},{"api_key":"12345","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":1.9028,"view_duration":6.91739,"date":"2014-04-16 02:25:07 UTC"},{"api_key":"12345","info":null,"source":"citeulike","ids":"Api::V5::SourcesController","db_duration":2.01702,"view_duration":9.26226,"date":"2014-04-16 02:08:11 UTC"},{"api_key":"12345","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":2.04405,"view_duration":8.85225,"date":"2014-04-16 02:08:11 UTC"},{"api_key":"12345","info":null,"source":"citeulike","ids":"Api::V5::SourcesController","db_duration":2.18712,"view_duration":7.48843,"date":"2014-04-16 02:08:02 UTC"},{"api_key":"12345","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":2.22149,"view_duration":8.98709,"date":"2014-04-16 02:08:02 UTC"},{"api_key":"12345","info":null,"source":"citeulike","ids":"Api::V5::SourcesController","db_duration":6.44474,"view_duration":138.501,"date":"2014-04-16 02:07:59 UTC"},{"api_key":"12345","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":2.47466,"view_duration":24.5482,"date":"2014-04-16 02:07:59 UTC"},{"api_key":"12345","info":null,"source":"citeulike","ids":"Api::V5::SourcesController","db_duration":2.02666,"view_duration":3.8703,"date":"2014-04-15 22:47:41 UTC"},{"api_key":"12345","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":2.22789,"view_duration":5.06711,"date":"2014-04-15 22:47:41 UTC"},{"api_key":"12345","info":null,"source":"citeulike","ids":"Api::V5::SourcesController","db_duration":2.02401,"view_duration":6.13996,"date":"2014-04-15 22:47:32 UTC"},{"api_key":"12345","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":2.07279,"view_duration":4.05589,"date":"2014-04-15 22:47:32 UTC"},{"api_key":"12345","info":null,"source":"citeulike","ids":"Api::V5::SourcesController","db_duration":1.69112,"view_duration":4.87041,"date":"2014-04-15 22:47:30 UTC"},{"api_key":"12345","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":1.79512,"view_duration":4.3581,"date":"2014-04-15 22:47:30 UTC"},{"api_key":"12345","info":null,"source":"citeulike","ids":"Api::V5::SourcesController","db_duration":2.11336,"view_duration":3.43929,"date":"2014-04-15 22:06:55 UTC"},{"api_key":"12345","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":2.05552,"view_duration":4.68206,"date":"2014-04-15 22:06:55 UTC"},{"api_key":"12345","info":null,"source":"citeulike","ids":"Api::V5::SourcesController","db_duration":2.17748,"view_duration":7.03821,"date":"2014-04-15 22:06:47 UTC"},{"api_key":"12345","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":3.18591,"view_duration":3.96267,"date":"2014-04-15 22:06:47 UTC"},{"api_key":"12345","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":2.10045,"view_duration":4.46653,"date":"2014-04-15 22:06:45 UTC"},{"api_key":"12345","info":null,"source":"citeulike","ids":"Api::V5::SourcesController","db_duration":2.47565,"view_duration":6.17777,"date":"2014-04-15 22:06:44 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":"datacite","ids":"Api::V5::SourcesController","db_duration":7.13648,"view_duration":49.8302,"date":"2014-04-15 21:00:29 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":5.47525,"view_duration":4.87701,"date":"2014-04-15 21:00:29 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":"citeulike","ids":"Api::V5::SourcesController","db_duration":14.9341,"view_duration":745.558,"date":"2014-04-15 21:00:25 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":4.69204,"view_duration":7.56285,"date":"2014-04-15 21:00:25 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":2.99855,"view_duration":513.44,"date":"2014-04-15 20:36:12 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.46808,"view_duration":6.1301,"date":"2014-04-15 20:35:08 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.27609,"view_duration":11.247,"date":"2014-04-15 20:34:46 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":4.21722,"view_duration":11.6631,"date":"2014-04-15 20:34:43 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":"datacite","ids":"Api::V5::SourcesController","db_duration":13.7171,"view_duration":486.44,"date":"2014-04-15 20:34:39 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":6.25811,"view_duration":9.13708,"date":"2014-04-15 20:34:39 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.38489,"view_duration":31.2549,"date":"2014-04-15 20:34:37 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.3344,"view_duration":19.6055,"date":"2014-04-15 20:34:36 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.86328,"view_duration":6.72405,"date":"2014-04-15 20:34:32 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":10.2404,"view_duration":5.19634,"date":"2014-04-15 20:34:28 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.44983,"view_duration":10.6763,"date":"2014-04-15 20:34:22 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.52207,"view_duration":7.21116,"date":"2014-04-15 20:33:59 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":"datacite","ids":"Api::V5::SourcesController","db_duration":2.86006,"view_duration":162.234,"date":"2014-04-15 20:33:54 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.35465,"view_duration":7.14977,"date":"2014-04-15 20:33:50 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.71445,"view_duration":16.3835,"date":"2014-04-15 20:33:22 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.46812,"view_duration":10.302,"date":"2014-04-15 20:32:40 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":2.03369,"view_duration":10.7386,"date":"2014-04-15 20:32:38 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.60607,"view_duration":11.223,"date":"2014-04-15 20:32:28 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":9.81676,"view_duration":13.6137,"date":"2014-04-15 20:31:26 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":8.67343,"view_duration":25.7844,"date":"2014-04-15 20:31:15 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":"datacite","ids":"Api::V5::SourcesController","db_duration":5.55409,"view_duration":10.5792,"date":"2014-04-15 20:31:09 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.31068,"view_duration":9.02502,"date":"2014-04-15 20:31:08 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.24089,"view_duration":19.2112,"date":"2014-04-15 20:31:02 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":"pubmed","ids":"Api::V5::SourcesController","db_duration":11.8268,"view_duration":93.9047,"date":"2014-04-15 20:18:38 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":6.22865,"view_duration":9.57759,"date":"2014-04-15 20:18:38 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":"wordpress","ids":"Api::V5::SourcesController","db_duration":7.94076,"view_duration":54.7605,"date":"2014-04-15 20:18:19 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":4.57226,"view_duration":5.71094,"date":"2014-04-15 20:18:19 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":2.05431,"view_duration":13.2166,"date":"2014-04-15 20:18:10 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":"wikipedia","ids":"Api::V5::SourcesController","db_duration":18.1939,"view_duration":209.185,"date":"2014-04-15 20:17:52 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":8.25346,"view_duration":11.915,"date":"2014-04-15 20:17:52 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":"datacite","ids":"Api::V5::SourcesController","db_duration":10.4319,"view_duration":95.8442,"date":"2014-04-15 20:17:51 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":6.73852,"view_duration":9.02302,"date":"2014-04-15 20:17:51 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.57187,"view_duration":8.09992,"date":"2014-04-15 20:16:17 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":6.99391,"view_duration":9.79736,"date":"2014-04-15 20:16:16 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.4176,"view_duration":7.92205,"date":"2014-04-15 20:15:58 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":"datacite","ids":"Api::V5::SourcesController","db_duration":16.6794,"view_duration":8.49771,"date":"2014-04-15 20:15:54 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.33605,"view_duration":6.99559,"date":"2014-04-15 20:15:50 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":"datacite","ids":"Api::V5::SourcesController","db_duration":3.26567,"view_duration":11.8758,"date":"2014-04-15 20:15:46 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":2.18609,"view_duration":28.191,"date":"2014-04-15 20:15:42 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.45585,"view_duration":10.3497,"date":"2014-04-15 20:15:28 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.72476,"view_duration":10.5883,"date":"2014-04-15 20:14:17 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":7.35367,"view_duration":47.6996,"date":"2014-04-15 20:14:11 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":6.51278,"view_duration":5.37725,"date":"2014-04-15 20:13:40 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":"reddit","ids":"Api::V5::SourcesController","db_duration":9.97595,"view_duration":76.2193,"date":"2014-04-15 20:13:39 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":2.66874,"view_duration":15.3277,"date":"2014-04-15 20:12:30 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":"datacite","ids":"Api::V5::SourcesController","db_duration":21.2166,"view_duration":163.312,"date":"2014-04-15 20:12:29 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":5.15871,"view_duration":8.16105,"date":"2014-04-15 20:12:29 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":"citeulike","ids":"Api::V5::SourcesController","db_duration":16.2931,"view_duration":177.419,"date":"2014-04-15 20:12:29 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":20.0735,"view_duration":9.68742,"date":"2014-04-15 20:12:29 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":4.95614,"view_duration":7.56823,"date":"2014-04-15 20:12:15 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.4046,"view_duration":6.37935,"date":"2014-04-15 20:12:13 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":"datacite","ids":"Api::V5::SourcesController","db_duration":2.93389,"view_duration":25.0107,"date":"2014-04-15 20:12:09 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.23027,"view_duration":6.88953,"date":"2014-04-15 20:12:05 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":11.2319,"view_duration":343.325,"date":"2014-04-15 20:11:58 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.41366,"view_duration":21.4695,"date":"2014-04-15 20:11:56 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.52369,"view_duration":8.86213,"date":"2014-04-15 20:11:45 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":2.3595,"view_duration":9.79063,"date":"2014-04-15 20:11:41 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.42829,"view_duration":12.3895,"date":"2014-04-15 20:11:34 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":"citeulike","ids":"Api::V5::SourcesController","db_duration":12.4334,"view_duration":24.8869,"date":"2014-04-15 20:11:27 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.35325,"view_duration":11.7699,"date":"2014-04-15 20:11:23 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":"citeulike","ids":"Api::V5::SourcesController","db_duration":8.97979,"view_duration":371.664,"date":"2014-04-15 20:10:10 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":31.5051,"view_duration":379.147,"date":"2014-04-15 20:10:04 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":190.628,"view_duration":1787.95,"date":"2014-04-15 20:10:01 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::StatusController","db_duration":6.7466,"view_duration":138.109,"date":"2014-04-15 20:08:50 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":null,"source":null,"ids":"Api::V5::SourcesController","db_duration":1.36499,"view_duration":7.17811,"date":"2014-04-15 20:08:37 UTC"},{"api_key":"01bb3895e86fc56a997fdefe8a7bac9268c13b24aab8d511d3902ed73fce","info":"summary","source":null,"ids":"Api::V5::ArticlesController","db_duration":2.60592,"view_duration":65.0201,"date":"2014-04-15 20:08:31 UTC"}]};

  it('should allow setting and retrieve chart data', function () {
    div = d3.select('body').append('div')
      .attr("id", "description");
  });
});
