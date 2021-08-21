Trong một mạng gồm ~N~ máy tính đánh số từ ~1~ đến ~N~. Sơ đồ nối mạng được cho bởi hệ thống gồm ~M~ kênh nối trực tiếp giữa một số cặp máy trong mạng. Biết chi phí truyền một đơn vị thông tin theo mỗi kênh nối của mạng.

Người ta cần chuyển một bức thông điệp từ máy ~S~ đến máy ~T~ sao cho tổng chi phí trên đường đi là nhỏ nhất.

**Yêu cầu:** Hãy lập trình để giải bài toán trên.

### Dữ liệu vào:
- Dòng đầu tiên ghi bốn số ~N, M, S, T~ cách nhau bởi dấu cách ~(1≤N ≤ 10000, 1≤M ≤ 100000)~;
- Mỗi dòng thứ ~i~ trong số ~m~ dòng tiếp theo ghi thông tin về kênh nối thứ ~i~ của mạng gồm ~3~ số ~D_i, C_i, G_i~. Trong đó ~D_i, C_i~ là chỉ số của hai máy tương ứng với kênh này và ~G_i~ (nguyên dương và ~0≤ G_i≤ 30000~) là chi phí để truyền một đơn vị thông tin từ máy ~D_i~ đến máy ~C_i~ (và ngược lại) theo kênh này ~(i=1,2,..n)~.

## Dữ liệu ra:
- Ghi chi phí truyền thông điệp theo cách tìm được.

## Ví dụ:
#### Dữ liệu vào;
```
5 7 1 5
1 2 3
1 4 8
2 3 5
2 4 4
3 5 5
4 3 8
4 5 3
```

## Dữ liệu ra:
```
10
```