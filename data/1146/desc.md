**<center>NGUỒN: Contest tháng 12/2017 Day 2 (Hiếu Hưng Yên - Second Round of Hải phòng)</center>**
<br>

Cho $𝑘$ dãy số nguyên, các số trong dãy thuộc $[−10^9; 10^9]$. Hãy viết chương trình tìm số xuất hiện trong cả $𝑘$ dãy. Nếu không có số nào xuất hiện trong cả $𝑘$ dãy thì ghi ký tự `x`, còn nếu có nhiều số cùng xuất hiện trong `𝑘` dãy thì ghi số nhỏ nhất tìm được. 

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương $𝑘\ (2 ≤ 𝑘 ≤ 10^5)$; 
- Dòng tiếp theo gồm $𝑘$ số lần lượt là độ dài từng dãy; 
- $𝑘$ dòng sau, mỗi dòng mô tả một dãy số, biết rằng tổng số lượng số trong $𝑘$ dãy không vượt quá $5\times 10^5$ số. 
Các số trên một dòng được ghi cách nhau bởi dấu cách. 

## Dữ liệu ra:
- Ghi số tìm được thỏa mãn điều kiện đầu bài hoặc ký tự `x` nếu không tìm được. 

## Ví dụ:
#### Dữ liệu vào:
```
2
3  4
1  2  3
4  3  2  -1 
```

#### Dữ liệu ra:
```
2
```

#### Dữ liệu vào:
```
3
5  6  7
2  1  3  4  3
4  5  -1  0  0  3
11 4  7  8  9  0  3
```

#### Dữ liệu ra:
```
3
```

## Giới hạn:
- $50\%$ số test tương ứng với $50\%$ số điểm có $𝑘 = 2$