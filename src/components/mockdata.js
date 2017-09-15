export const usersMock = [
  { 'id': 1, 'display_name': 'Mira Bellenbaum', 'email': 'l@l.de', 'unverified_email': 'l@l.de', 'address': 'Darmstadt, Regierungsbezirk Darmstadt, Hessen, Deutschland', 'latitude': 49.8990022441358, 'longitude': 8.66415739059448, 'description': 'This is me!', 'mail_verified': false, 'key_expires_at': '2017-08-02T21:22:54.730980Z', 'current_group': 1, 'language': 'en' },
  { 'id': 2, 'display_name': 'Max Mustermann', 'email': 'm@m.de', 'unverified_email': 'm@m.de', 'address': 'Darmstadt, Regierungsbezirk Darmstadt, Hessen, Deutschland', 'latitude': 49.9090022441358, 'longitude': 8.66815739059448, 'description': 'This is me too!', 'mail_verified': false, 'key_expires_at': '2017-08-02T21:22:54.730980Z', 'current_group': 1, 'language': 'en' },
  { 'id': 3, 'display_name': 'Karl Karlson', 'email': 'k@k.de', 'unverified_email': 'l@l.de', 'address': 'Darmstadt, Regierungsbezirk Darmstadt, Hessen, Deutschland', 'latitude': 49.8990022441358, 'longitude': 8.66415739059448, 'description': 'How are you?', 'mail_verified': false, 'key_expires_at': '2017-08-02T21:22:54.730980Z', 'current_group': 1, 'language': 'de' },
  { 'id': 4, 'display_name': 'Mona Mohnblume', 'email': 'mm@m.de', 'unverified_email': 'm@m.de', 'address': 'Darmstadt, Regierungsbezirk Darmstadt, Hessen, Deutschland', 'latitude': 49.9090022441358, 'longitude': 8.66815739059448, 'description': 'Great to be here!', 'mail_verified': false, 'key_expires_at': '2017-08-02T21:22:54.730980Z', 'current_group': 1, 'language': 'en' }
]

export const storesMock = [
  { 'id': 1, 'name': 'Teststore1', 'description': 'all the good stuff', 'group': 1, 'address': 'Kranichstein, Darmstadt, Regierungsbezirk Darmstadt, Hesse, Germany', 'latitude': 49.8965397, 'longitude': 8.6847644, 'weeks_in_advance': 4, 'upcoming_notification_hours': 4 },
  { 'id': 60, 'name': 'New Tienda', 'description': 'bla bla', 'group': 1, 'address': null, 'latitude': 49.8701892656281, 'longitude': 8.65070343017578, 'weeks_in_advance': 4, 'upcoming_notification_hours': 4 },
  { 'id': 56, 'name': 'Supermarkt Arheilgen', 'description': 'blabla', 'group': 1, 'address': 'Frankfurter Landstraße 147 Arheilgen', 'latitude': 49.9105778076202, 'longitude': 8.65834236145019, 'weeks_in_advance': 4, 'upcoming_notification_hours': 4 },
  { 'id': 2, 'name': 'asd', 'description': 'asd', 'group': 1, 'address': 'Luisenplatz, Darmstadt, Regierungsbezirk Darmstadt, Hessen, 64283, Deutschland', 'latitude': 49.8728175, 'longitude': 8.65062690796964, 'weeks_in_advance': 4, 'upcoming_notification_hours': 4 },
  { 'id': 61, 'name': 'Griesheimer Markt', 'description': 'Frisches Essen dies das', 'group': 1, 'address': 'Griesheim Marktplatz', 'latitude': 49.8615586173026, 'longitude': 8.57465744018555, 'weeks_in_advance': 4, 'upcoming_notification_hours': 4 }
]

export const pickupsMock = [
  { 'id': 873, 'date': '2017-08-12T08:00:00Z', 'series': 36, 'store': 18, 'max_collectors': 4, 'collector_ids': [1, 2, 3, 4], 'description': 'This Pickup is very Fun!', isFull: true, isUserMember: false },
  { 'id': 874, 'date': '2017-08-13T08:00:00Z', 'series': 16, 'store': 13, 'max_collectors': 2, 'collector_ids': [], 'description': '', isFull: false, isUserMember: true }
]