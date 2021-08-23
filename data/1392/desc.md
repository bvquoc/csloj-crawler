**<center>NGUỒN: Bài tập Bồi dưỡng HSGQG, Hải Phòng, T11/2020, Thái BK</center>**

Bối cảnh trò chơi XGUN là một nửa quả đồi, được chia thành $n$ cột. Độ cao của cột $i$ là $h_i\ (0 ≤ h_1 ≤ h_2≤ … ≤ h_n ≤ 10^9)$. Trò chơi diễn ra $m$ lượt theo trình tự, mỗi lượt được đặc trưng bởi hai số $i, L$ có nghĩa là nhân vật ở cột $i$ bắn một tia độ dài $L$ về bên phải. Khi nhân vật ở cột $i$ bắn một tia độ dài $L$ về bên phải, các cột $i + 1, i + 2, … , i + L$ sẽ giảm độ cao về bằng với độ cao hiện tại của cột $i$. Điểm của lượt chơi này là số lượng đất bị phá, tức là tổng mức giảm độ cao của các cột bị giảm.

**Yêu cầu:** Hãy tính điểm của từng lượt chơi.

## Dữ liệu vào:
- Dòng đầu chứa $n$;
- Dòng tiếp theo chứa $h_1, h_2, …, h_n$;
- Dòng tiếp theo chứa số lượt chơi $m$;
- $m$ dòng tiếp theo mỗi dòng chứa một lượt chơi $i\ L\ (1 ≤ L ≤ n − i)$.

## Dữ liệu ra:
- In ra trên $m$ dòng là điểm của $m$ lượt chơi.

## Ví dụ:
### Dữ liệu vào:
```
5
1 2 3 4 5
4
3 1
1 2
3 2
1 4
```

### Dữ liệu ra:
```
1
3
6
0
```

## Giới hạn:
- $1 ≤ n, m ≤ 10^5, 0 ≤ h_i ≤ 10^9$;
- Có ít nhất $50\%$ số test với $n, m ≤ 5000$.