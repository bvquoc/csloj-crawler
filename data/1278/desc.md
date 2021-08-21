Cuộc thi chạy bộ sắp diễn ra trên quãng đường dài $l$, gồm $n$ thí sinh. Thí sinh thứ $i$ sẽ xuất phát tại thời điểm $t_i$ với vận tốc là $v_i$. Khi hai người nào đó gặp nhau trên quãng đường chạy thì họ sẽ là bạn của nhau.

Biết rằng không có thí sinh nào xuất phát cùng lúc, và cũng không có thí sinh nào về đích cùng lúc. Nhiệm vụ của bạn là tìm ra nhóm người gồm nhiều người nhất, sao cho hai người bất kì trong nhóm đều là bạn của nhau.

## Dữ liệu vào:
- Dòng đầu tiên gồm hai số $l$ và $n\ (100≤l≤10000,1≤N≤500)$;
- $N$ dòng tiếp theo mỗi dòng gồm cặp số $t_i$ và $v_i\ (0≤ t_i ≤1000,1≤v_i ≤100)$;

## Dữ liệu ra:
- Gồm một số nguyên duy nhất là số người nhiều nhất của nhóm tìm được.

## Ví dụ:
#### Dữ liệu vào:
```
1000 4
1 3
2 1
0 2
3 4
```

#### Dữ liệu ra:
```
3
```

#### Dữ liệu vào:
```
1000 4
0 1
2 1
1 1
3 1
```

#### Dữ liệu ra:
```
1
```

## Giới hạn:
- $44\%$ có $N≤250$ và kết quả lớn nhất là $16$.