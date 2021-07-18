import requests

def select(data):
	way = input("\n1 - Посмотреть всех, 2 - Поиск по ID, 3 - Поиск по артикулу, 4 - Выбрать по типу -- ")
	if way == "1":
		i = 0
		while i < len(data):
			print(f"{i+1}: \nИдентификатор - {data[i]['_id']}\nАртикул - {data[i]['SKU']}\nНазвание - {data[i]['Title']}\nТип товара - {data[i]['Type']}\nЦена - {data[i]['Price']}$\n")
			i += 1
	elif way == "2":
		id_u = input("\nВведите ID -- ")
		try:
			data = requests.get(f"{url}/{id_u}").json()
			print(f"\nИдентификатор - {data['_id']}\nАртикул - {data['SKU']}\nНазвание - {data['Title']}\nТип товара - {data['Type']}\nЦена - {data['Price']}$\n")
		except:
			print("error 404: not found")
	elif way == "3":
		SKU = input("\nВведите артикул -- ")
		try:
			data = requests.get(f"{url}/{SKU}/i").json()
			print(f"\nИдентификатор - {data['_id']}\nАртикул - {data['SKU']}\nНазвание - {data['Title']}\nТип товара - {data['Type']}\nЦена - {data['Price']}$\n")
		except: 
			print("error 404: not found")
	elif way == "4":
		type = input("\nВведите тип товара -- ")
		url = 'https://shopapiforxsolla.herokuapp.com/catalog'
		data = requests.get(f"{url}/{type}/t").json()
		try:
			i = 0
			while i < len(data):
				print(f"{i+1}: \nИдентификатор - {data[i]['_id']}\nАртикул - {data[i]['SKU']}\nНазвание - {data[i]['Title']}\nТип товара - {data[i]['Type']}\nЦена - {data[i]['Price']}$\n")
				i += 1
		except: 
			print("error 404: not found")
	else:
		print("wrong")

def insert():
	object_SKU = input("\nВведите артикул товара -- ")
	object_tilte = input("Введите название товара-- ")
	object_type = input("Введите тип товара -- ")
	object_price = float(input("Введите цену товара($) -- "))
	requests.post(url, data={"SKU": object_SKU, "Title": object_tilte, "Type": object_type, "Price": object_price}, 
				json={"SKU": object_SKU, "Title": object_tilte, "Type": object_type, "Price": object_price})

def update():
	way = input("\n1 - Изменить по ID, 2 - Изменить по артикулу -- ")
	if way == "1":
		id_u = input("\nВведите ID товара которого хотите изменить -- ")
		newSKU = input("\nВведите новый Артикул товара: ")
		newTitle = input("Введите новое название товара")
		newType = input("Введите новый тип товара")
		newPrice = float(input("введите новую цену"))
		requests.put(f"{url}/{id_u}", data={"SKU": newSKU, "Title": newTitle, "Type": newType, "Price": newPrice}, json={"SKU": newSKU, "Title": newTitle, "Type": newType, "Price": newPrice})
		requests.put(f"{url}/{id_u}", data={"name": name}, json={	"name": name})
	elif way == '2':
		oldSKU = input("\nВведите Артикул товара которого хотите изменить -- ")
		newSKU = input("\nВведите новый Артикул товара: ")
		newTitle = input("Введите новое название товара: ")
		newType = input("Введите новый тип товара: ")
		newPrice = float(input("введите новую цену: "))
		requests.put(f"{url}/{oldSKU}/i", data={"SKU": newSKU, "Title": newTitle, "Type": newType, "Price": newPrice}, json={"SKU": newSKU, "Title": newTitle, "Type": newType, "Price": newPrice})

		
def delete():
	way = input("\n1 - Удалить по ID, 2 - Удалить по артикулу -- ")
	if way == "1":
		id_u = input("\nВведите ID товара который хотите удалить -- ")	
		requests.delete(f"{url}/{id_u}")
	elif way == "2":
		name = input("\nВведите артикул товара который хотите удалить -- ")	
		requests.delete(f"{url}/{name}/i")

while True:
	url = 'https://shopapiforxsolla.herokuapp.com/catalog'
	data = requests.get(f"{url}").json()
	way = input("1 - Просмотр, 2 - Добавить, 3 - Изменить, 4 - Удалить -- ")
	if way == "1":
		select(data)
	elif way == "2":
		insert()
	elif way == "3":
		update()
	elif way == "4":
		delete()
	else:
		print("wrong")
