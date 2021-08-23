Có $n$ diễn viên làm việc trong nhà hát, trong đó có $a$ diễn viên cao, $b$ diễn viên mắt xanh và $c$ diễn viên tóc vàng.

Đối với vai chính trong vở kịch mới cần một diễn viên thỏa mãn cao, mắt xanh và tóc vàng.

**Yêu cầu:** xác định số lượng diễn viên tối đa và tối thiểu mà đạo diễn có thể CASTING?

## Dữ liệu vào:
- Dòng đầu chứa số nguyên $k$ trong đó $k$ là loại câu hỏi: $k=1$ là cho biết số lượng diễn viên tối thiểu, $k=2$ là cho biết số lượng diễn viên tối đa;
- Dòng sau chứa $4$ số nguyên $n,a,b,c\ (1≤n≤10000;0≤a,b,c≤n$.

## Dữ liệu ra:
- Tương ứng với $k=1$, ghi ra số lượng diễn viên tối thiểu, $k=2$, ghi ra số lượng diễn viên tối đa.

### Dữ liệu vào
```
2
5 3 4 5
```

### Dữ liệu ra:
```
3
```

### Dữ liệu vào:
```
1
5 3 4 5
```

### Dữ liệu ra:
```
2
```

### Giải thích:
- Test ví dụ $1$: Chỉ có $3$ diễn viên cao lên tối đa có $3$ diễn viên để đạo diễn CASTING;
- Test ví dụ $2$: Có $3$ diễn viên cao, $5$ diễn viên tóc vàng. Vì $4$ diễn viên mắt xanh $→$ có $1$ diễn viên không phải mắt xanh, vậy trong $3$ diễn viên cao có ít nhất $2$ diễn viên mắt xanh. Vậy ít nhất có $2$ diễn viên để đạo diễn CASTING.