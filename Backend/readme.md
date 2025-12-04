Backend/
├── venv/
├── app/
│   ├── main.py            # FastAPI app, CORS, mount routers
│   ├── routers/
│   │   ├── models.py      # routes: upload model, list models
│   ├── services/
│   │   └── storage.py     # save files, manage filenames
│   ├── utils/
│   │   └── helpers.py
│   └── schemas.py         # pydantic schemas
├── uploads/               # saved uploaded models (.glb/.gltf)
├── requirements.txt
└── README.md