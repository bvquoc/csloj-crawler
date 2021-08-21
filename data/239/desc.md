Bill Gates có một trong những chuyến đi từ thiện của mình đến một ngôi làng ở Utopia. Ông có ~N~ gói kẹo và muốn phân phối một gói cho mỗi trẻ em trong ~K~ làng (mỗi gói có thể chứa số lượng khác nhau của các loại bánh kẹo). Để tránh một cuộc cãi nhau giữa các đứa trẻ, ông muốn chọn ~K~ trong ~N~ gói sao cho độ bất công được tối thiểu.

Giả sử ~K~ gói có ~(x_1, x_2, x_3, …, x_K)~ kẹo trong các gói, với ~x_i~ là số kẹo trong gói thứ ~i~, cách xác định độ bất công là:
~Max(x_1,x_2,…,x_K)-Min(x_1,x_2,…,x_K)~.

## Dữ liệu vào:
- Dòng đầu tiên là số nguyên dương ~N\ (2≤N≤10^5)~;
- Dòng thứ ~2~ là số nguyên dương ~K\ (2≤K≤N)~;
- ~N~ dòng sau là số kẹo trong ~N~ gói. Số kẹo ~∈[0;10^9]~.

## Dữ liệu ra:
- Ghi ra số nguyên duy nhất là kết quả của bài toán.

## Ví dụ:
#### Dữ liệu vào:
```
7
3
10
100
300
200
1000
20
30
```

#### Dữ liệu ra:
```
20
```

#### Dữ liệu vào:
```
10
4
1
2
3
4
10
20
30
40
100
200
```

#### Dữ liệu ra:
```
3
```