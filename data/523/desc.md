Cho dãy ~n~ số nguyên ~a_1, a_2, …, a_n~, ban đầu tất cả đều bằng ~0~.
Cho ~m~ truy vấn, mỗi truy vấn có một trong hai dạng:
- ~0\ u\ v\ d:~ cộng giá trị ~d~ vào các phần tử ~a_u, a_{u + 1}, …, a_v~;
- ~1\ u\ v:~ Tìm giá trị lớn nhất của dãy con ~a_u, a_{u + 1}, …, a_v~.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~n, m~;
- ~m~ dòng sau, mỗi dòng chứa một truy vấn (thuộc một trong hai loại trên).

## Dữ liệu ra:
- Với mỗi truy vấn loại hai, ghi ra trên một dòng đáp án của truy vấn đó.

## Ví dụ:
#### Dữ liệu vào:
```
6 3
0 1 3 3
0 4 6 4
1 1 6
```

#### Dữ liệu ra:
```
4
```

#### Giải thích:
- Dãy ban đầu: ~0, 0, 0, 0, 0, 0~;
- Dãy sau truy vấn thứ nhất: ~3, 3, 3, 0, 0, 0~;
- Dãy sau truy vấn thứ hai: ~3, 3, 3, 4, 4, 4~;
- Đáp số của truy vấn thứ ba: ~4~.

## Giới hạn:
- ~1 ≤ n, m ≤ 10^5; 1 ≤ u ≤ v ≤ n; |d| ≤ 1000~.