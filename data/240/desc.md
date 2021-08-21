Một công ty sản xuất tấm cách nhiệt nhiều tầng. Mỗi tầng thứ ~i\ (i=1,2,…,n)~ có một hệ số cách nhiệt là ~a_i~. Các tầng được đánh số từ hướng nóng ra bên ngoài.

Hơi nóng ~→|| a_1 | a_2 | … | a_i | a_{i+1} | … | a_n ||→~ bên ngoài

Hệ số cách nhiệt của một tấm cách nhiệt được đo bằng công thức sau:
~~A=\sum_{i=1}^n a_i +\sum_{i=1}^{n-1} max⁡(0;a_{i+1}-a_i)~~

**Ví dụ:** Hệ số cách nhiệt của tấm cách nhiệt sau:
~→|| 5 | 4 | 1 | 7 ||→~ là ~A = (5+4+1+7)+(7-1) = 23~.

Bạn hãy viết một chương trình: cho hệ số của các tầng cách nhiệt, hãy sắp xếp lại thứ tự các tầng cách nhiệt sao cho hệ số cách nhiệt của cả tấm là lớn nhất có thể.

## Dữ liệu vào:
- Dòng đầu tiên ghi số ~n~ là số tầng của tấm các nhiệt ~(1≤n≤10^5)~;
- ~n~ dòng tiếp theo, dòng ~i~ ghi một số nguyên dương ~a_i~ thể hiện hệ số cách nhiệt của lớp cách nhiệt thứ ~i\ (1≤a_i≤10000)~.

## Dữ liệu ra:
- Ghi một số duy nhất là hệ số cách nhiệt lớn nhất của tấm tìm được.

## Ví dụ:
#### Dữ liệu vào:
```
4
5
4
1
7
```

#### Dữ liệu ra:
```
24
```