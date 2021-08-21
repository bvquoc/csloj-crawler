Một hệ thống gồm ~n~ máy tính được nối thành một mạng có ~m~ kênh nối, mỗi kênh nối hai máy tính trong mạng, giữa hai máy tính có không quá ~1~ kênh nối. Các máy tính được đánh số từ ~1~ đến ~n~ và các kênh nối được đánh số từ ~1~ tới ~m~. Việc truyền tin trực tiếp có thể thực hiện được đối với hai máy có kênh nối. Các kênh nối trong mạng được chia ra làm ba loại ~1, 2, 3~. Ta nói giữa hai máy ~a~ và ~b~ trong mạng có đường truyền tin loại ~k\ (k∈{1, 2})~ nếu tìm được dãy các máy ~a = v_1, v_2, ..., v_p = b~ thoả mãn điều kiện: giữa hai máy ~v_i~ và ~v_{i+1}~ hoặc có kênh nối loại ~k~, hoặc có kênh nối loại ~3, (i = 1, 2, ..., p - 1)~.

**Yêu cầu:** Cần tìm cách loại bỏ khỏi mạng một số nhiều nhất kênh nối nhưng vẫn đảm bảo luôn tìm được cả đường truyền tin loại ~1~ lẫn đường truyền tin loại ~2~ giữa hai máy bất kỳ trong mạng.

## Dữ liệu vào:
- Dòng một chứa hai số ~n, m~ cách nhau một dấu cách;
- Dòng thứ ~i~ trong số ~m~ dòng tiếp theo chứa ba số nguyên dương ~u_i, v_i, s_i~ cho biết kênh truyền tin thứ ~i~ là kênh loại ~s_i~ nối hai máy ~u_i~ và ~v_i~.

## Dữ liệu ra:
- Dòng đầu tiên ghi ~r~ là số kênh cần loại bỏ. ~r = -1~ nếu trong mạng đã cho tồn tại hai máy không có đường truyền tin loại ~1~ hoặc loại ~2~;
- Nếu ~r > 0~ thì ~r~ dòng tiếp theo, mỗi dòng ghi chỉ số của một kênh cần loại bỏ.

## Ví dụ:
#### Dữ liệu vào:
```
5 7
1 2 3
2 3 3
3 4 3
5 3 2
5 4 1
5 2 2
1 5 1
```

#### Dữ liệu ra:
```
2
6
7
```

#### Dữ liệu vào:
```
3 3
1 2 1
2 3 3
1 3 2
```

#### Dữ liệu ra:
```
0
```

## Giới hạn:
- ~1 ≤ n ≤ 500; 0 ≤ m ≤ 10000~.