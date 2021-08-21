Thời tam quốc có một chú ngựa rất nổi tiếng đó là ngựa xích thố. Có những câu nói nổi tiếng về chú ngựa này như: “Nhân trung Lã Bố, Mã trung xích thố”, hay “ngày đi ngàn dặm”. Hôm nay chúng ta có một thử thách cho chú ngựa này.

Trên một mảnh đất hình chữ nhật được chia thành ~N~ dòng, ~M~ cột. Chú ngữa xích thố đứng ở một ô nào đó. Mỗi bước di chuyển chú ngựa này được phép bước sang một ô khác là ô đối diện trong một hình chữ nhật ~2×3~ hoặc ~3×2~ (như hình dưới đây)
<center><img src="/images/problems/394/BTXICHTHO.png" width=250px></center>

Bạn hãy giúp chú ngựa này tìm đường đi sao cho có thể di chuyển qua tất cả các ô trên mảnh đất trên (Mỗi ô chỉ đi qua đúng một lần).

## Dữ liệu vào:
- Một dòng duy nhất chứa ~4~ số nguyên dương ~N, M, r, c~ lần lượt là số dòng, số cột của mảnh đất, tọa độ dòng, tọa độ cột ban đầu của chú ngựa, mỗi số cách nhau một khoảng trắng.

## Dữ liệu ra:
- Một đường đi bất kỳ của chú ngựa: Gồm ~N×M~ dòng, mỗi dòng có ~2~ số nguyên là tọa độ (dòng, cột) của ô mà chú ngựa đi qua. Liệt kê theo thứ tự các ô đi qua (tính từ ô xuất phát). Nếu không tồn tại đường đi thỏa mãn thì in ra ~-1~.

## Ví dụ:
#### Dữ liệu vào:
```
4 3 1 1
```

#### Dữ liệu ra:
```
1 1
3 2
1 3
2 1
4 2
2 3
3 1
4 3
2 2
4 1
3 3
1 2
```

#### Dữ liệu vào:
```
3 4 2 2
```

#### Dữ liệu ra:
```
-1
```

#### Giải thích:
Thứ tự các ô đi qua trong ví dụ thứ nhất như sau:

| 1  | 12 | 3  |
|----|----|----|
| 4  | 9  | 6  |
| 7  | 2  | 11 |
| 10 | 5  | 8  |

## Giới hạn:
- ~3 ≤ n, m ≤ 8~