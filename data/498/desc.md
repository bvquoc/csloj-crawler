Bạn được cho một hàng đợi rỗng và một số truy vấn với hàng đợi này. Các truy vấn là những truy vấn cơ bản của hàng đợi: Đẩy vào cuối hàng đợi, lấy ra ở đầu hàng đợi, in ra phần tử ở đầu hàng đợi, các truy vấn có dạng:
- ~1\ n:~ Đẩy số nguyên ~n~ vào cuối hàng đợi
- ~2:~ Loại bỏ phần tử ở đầu đầu hàng đợi (nếu hàng đợi rỗng thì thao tác này không có hiệu lực)
- ~3:~ In ra phần tử ở đầu hàng đợi (không lấy ra khỏi hàng đợi, nếu hàng đợi rỗng thì in ra `Empty!`)

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~T~ là số truy vấn;
- ~T~ dòng tiếp theo, mỗi dòng chứa một truy vấn.

## Dữ liệu ra:
- Ứng với mỗi truy vấn loại ~3~, in ra kết quả tương ứng trên một dòng.

## Ví dụ:
#### Dữ liệu vào:
```
8
1 5
1 7
1 6
2
3
2
2
3
```

#### Dữ liệu ra:
```
7
Empty!
```

## Giới hạn:
- ~1 ≤ T ≤ 10^5; |n| ≤ 10^9~.