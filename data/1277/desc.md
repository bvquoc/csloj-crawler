Nhà bếp có một chồng bánh ngọt gồm ~N~ chiếc bánh ~(1≤N≤8)~, mỗi chiếc bánh có một kích thước khác nhau và không có ~2~ chiếc bánh nào có cùng kích thước.

Bạn phải sắp xếp lại chồng bánh sao cho từ trên xuống dưới (có nghĩa là từ trái qua phải) thì kích thước các chiếc bánh giảm dần). Tuy nhiên, bạn chỉ được thực hiện thao tác như sau: chọn một vị trí ~i~ bất kì và lật ngược thứ tự các chiếc bánh từ ~i~ tới ~N~. Ví dụ như chồng bánh gồm ~4~ chiếc bánh ~(31, 42, 11, 23)~, khi bạn chọn vị trí 2, thì chồng bánh sẽ biến thánh ~(31, 23, 11, 42)~ (các chiếc bánh đánh số từ ~1~ tới ~N~).

Hãy tính số bước ít nhất để đưa chồng bánh về theo ý muốn của bạn.

## Dữ liệu vào:
- Dòng đầu tiên là ~T~, số lượng các test ~(T≤6000)~;
- Mỗi dòng trong ~T~ dòng tiếp theo, bắt đầu bằng số ~N~ và tiếp sau đó là ~N~ số thể hiện chồng bánh. 

## Dữ liệu ra:
- Gồm ~T~ dòng tương ứng với kết quả trong dữ liệu vào.

## Ví dụ:
#### Dữ liệu vào:
```
2
4 4 3 2 1
8 8 7 6 5 4 1 2 3
```

#### Dữ liệu ra:
```
0
1
```

#### Dữ liệu vào:
```
3
4 4 3 2 1
8 8 7 6 5 4 1 2 3
5 5 1 2 4 3
```

#### Dữ liệu ra:
```
0
1
2
```

#### Dữ liệu vào:
```
2
5 555555 111111 222222 444444 333333
8 1000000 999999 999998 999997 999996 999995 999994 999993
```

#### Dữ liệu ra:
```
2
0
```

#### Dữ liệu vào:
```
3
5 555555 111111 222222 444444 333333
8 1000000 999999 999998 999997 999996 999995 999994 999993
5 3 8 7 6 10
```

#### Dữ liệu ra:
```
2
0
4
```