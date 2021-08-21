**<center>Nguồn:  Free Contest 04</center>**
***<center>SRM 400</center>***

Biển hiệu của quán bar Rick American có kích thước ~M × N~, mỗi ô được gắn một bóng đèn. Các bóng đèn có trạng thái bật hoặc tắt. Khi bạn chạm tay vào một bóng đèn, nó sẽ đổi trạng thái từ bật sang tắt và ngược lại. Tuy nhiên, do biển hiệu đã cũ và bắt đầu trục trặc, khi bạn chạm tay vào một bóng đèn, bóng đèn này cùng với những bóng đèn kề đỉnh với nó cũng đổi trạng thái.

Hãy giúp Shacha, quản lí quán bar bật tất cả các bóng đèn với ít thao tác nhất.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên ~M~ và ~N\ (1 ≤ M, N ≤ 8)~;
- ~M~ dòng tiếp theo, mỗi dòng chứa ~N~ kí tự `.` hoặc `*`, chỉ ra một bóng đèn đang tắt hay bật.

## Dữ liệu ra:
- In ra số thao tác ít nhất cần thực hiện, hoặc ~-1~ nếu việc bật tất cả các bóng là không thực hiện được.

## Ví dụ:
#### Dữ liệu vào:
```
5 5  
*****
*...*
*...*
*...*
*****
```

#### Dữ liệu ra:
```
1
```

#### Dữ liệu vào:
```
1 2 
.*
```

#### Dữ liệu ra:
```
-1
```

#### Dữ liệu vào:
```
3 3  
**.
**.
...
```

#### Dữ liệu ra:
```
2
```

#### Dữ liệu vào:
```
4 4   
*...
**..
..**
...*
```

#### Dữ liệu ra:
```
10
```