**<center>Nguồn: Beginner Free Contest 11</center>**

Cho một mảng hai chiều kích cỡ $n×m$, hãy đếm số hình chữ nhật toàn số $1$ xuất hiện trong mảng hai chiều đó.

## Dữ liệu vào:
- Dòng đầu tiên gồm hai số nguyên dương $n$ và $m$;
- $n$ dòng tiếp theo, mỗi dòng gồm $m$ số nguyên mô tả mảng hai chiều được cho.

## Dữ liệu ra:
- Gồm một dòng duy nhất chứa một số nguyên là số hình chữ nhật toàn số $1$ xuất hiện trong mảng hai chiều được cho.

## Ví dụ:
#### Dữ liệu vào:
```
3 3
1 0 1
0 0 0
1 0 1
```

#### Dữ liệu ra:
```
4
```

#### Dữ liệu vào:
```
5 5
1 1 0 0 1
1 1 0 0 1
0 0 0 0 1
0 0 0 0 0
1 1 0 1 1
```

#### Dữ liệu ra:
```
4
```

## Lưu ý:
Các bộ dữ liệu sau được coi là không hợp lệ và sẽ không xuất hiện trong số những bộ dữ liệu được sử dụng để chấm bài.

#### Dữ liệu vào:
```
5 5
1 1 0 0 1
1 1 0 0 1
0 0 0 0 1
0 0 0 0 0
1 1 0 1 1
```

#### Lí do:
- Viền của một số cặp hai hình chữ nhật có điểm chung

#### Dữ liệu vào:
```
5 5
1 1 1 1 1 0 0 1 1
1 0 0 0 1 0 0 1 1
1 0 0 0 1 0 0 0 0
1 0 0 0 1 0 0 0 1
1 1 1 1 1 0 0 0 0
```

#### Lí do:
- Có hình không phải hình chữ nhật xuất hiện trong dữ liệu vào.

#### Dữ liệu vào:
```
3 4
0 0 1 1
0 1 1 0
1 1 0 0
```

#### Lí do:
- Hình chữ nhật bị nghiêng

## Giới hạn:
- $1 ≤ n, m ≤ 1000$;
- Các số trong mảng hai chiều chỉ có giá trị $0$ hoặc $1$;
- Trong mảng hai chiều chỉ xuất hiện các hình chữ nhật và không có thêm các hình nào khác;
- Các hình chữ nhật xuất hiện trong mảng hai chiều đều có các cạnh song song với mép của mảng hai chiều. Nói cách khác, các hình chữ nhật trong dữ liệu vào không bị nghiêng;
- Không có hai hình chữ nhật nào chạm nhau. Nói cách khác, viền của hai hình chữ nhật bất kì sẽ không có một điểm chung nào.