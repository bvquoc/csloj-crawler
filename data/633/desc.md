**<center>Nguồn: Beginner Free Contest 7</center>**

Toudou có ~N~ cái bánh, mỗi cái bánh mang năng lượng ~W_i~. Có bao nhiêu cách chia đống bánh ra thành ~3~ phần liên tiếp sao cho mỗi chiếc bánh thuộc đúng một phần và tổng giá trị năng lượng của 3 phần là bằng nhau?

Nói cách khác, hãy đếm số cặp ~(i, j)~ sao cho ~2 ≤ i ≤ j ≤ n−1~ và:
~~\sum_{k=1}^{i-1}a_k=\sum_{k=i}^{j}a_k=\sum_{k=j+1}^{N}a_k~~

## Dữ liệu vào:
- Dòng đầu tiên, gồm một số nguyên ~N~;
- Dòng tiếp theo, gồm ~N~ số nguyên ~W_i~ - là giá trị năng lượng của mỗi cái bánh.

## Dữ liệu ra:
- Gồm một dòng duy nhất là kết quả bài toán.

## Ví dụ:
#### Dữ liệu vào:
```
5
1 2 3 0 3
```

## Dữ liệu ra:
```
2
```

#### Dữ liệu vào:
```
4
0 1 -1 0
```

## Dữ liệu ra:
```
1
```

## Giới hạn:
- ~1 ≤ N ≤ 500000; |W_i| ≤ 10^9~. Trong đó ~30\%~ số test có ~1 ≤ N ≤ 5000~.