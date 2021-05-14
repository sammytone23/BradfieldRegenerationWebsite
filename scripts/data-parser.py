#csv data parser
import csv
with open("data/data_unfinished.csv", newline='') as file:
	data_reader=csv.reader(file, delimiter=' ', quotechar='|')
	print_list=[]
	for row in data_reader:
		print_list.append(row)
	print(print_list)